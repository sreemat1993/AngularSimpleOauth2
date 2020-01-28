import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { LoggerComponent } from './logger/logger.component';
import { ErrorsHandler } from './error-handler';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot()
  ],
  providers: [CustomPreloadingStrategy, {
    provide: ErrorHandler,
    useClass: ErrorsHandler,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
