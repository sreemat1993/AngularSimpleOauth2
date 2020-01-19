import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './authconfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private oauthService: OAuthService, private router: Router) {
    this.setOauthConfiguration();
  }

  private setOauthConfiguration() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
        this.oauthService.initLoginFlow();
      } else {
        this.router.navigate(['/dashboard']);
      }
    });
    this.oauthService.setupAutomaticSilentRefresh();
  }

  private initLogin() {
    this.oauthService.initCodeFlow();
  }
}
