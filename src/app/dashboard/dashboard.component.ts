import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private oauthService: OAuthService) {

  }

  ngOnInit() {
  }

  get accessToken() {
    return this.oauthService.getAccessToken();
  }
  get refreshToken() {
    return this.oauthService.getRefreshToken();
  }
  refresh() {
    this.oauthService.refreshToken();
  }
}
