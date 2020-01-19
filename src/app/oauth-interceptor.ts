import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { OAuthStorage, OAuthResourceServerErrorHandler, OAuthModuleConfig } from 'angular-oauth2-oidc';

import { Optional } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export class OauthInterceptor implements HttpInterceptor {

    constructor(
        private authStorage: OAuthStorage,
        private errorHandler: OAuthResourceServerErrorHandler,
        @Optional() private moduleConfig: OAuthModuleConfig
    ) {
    }

    private checkUrl(url: string): boolean {
        let found = this.moduleConfig.resourceServer.allowedUrls.find(u => url.startsWith(u));
        return !!found;
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let url = req.url.toLowerCase();

        if (!this.moduleConfig) return next.handle(req);
        if (!this.moduleConfig.resourceServer) return next.handle(req);
        if (!this.moduleConfig.resourceServer.allowedUrls) return next.handle(req);
        if (!this.checkUrl(url)) return next.handle(req);

        let sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;

        if (sendAccessToken) {

            let token = this.authStorage.getItem('access_token');
            let header = 'Bearer ' + token;

            let headers = req.headers
                .set('Authorization', header);

            req = req.clone({ headers });
        }

        return next.handle(req).pipe(
            catchError(err => this.errorHandler.handleError(err))
        );

    }

}