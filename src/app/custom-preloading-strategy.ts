import { PreloadingStrategy } from '@angular/router';

import { Route } from '@angular/compiler/src/core';

import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return of(true).pipe(delay(7000), flatMap(_ => fn()));

        // if (true) {
        //   return fn();
        // }
    }
}