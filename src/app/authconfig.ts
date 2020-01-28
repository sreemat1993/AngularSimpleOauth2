import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    issuer: 'https://auth.pingone.eu/a3384e12-8628-44fe-9c16-0c55d38daa65/as',
    redirectUri: 'http://localhost:4200/',
    responseType: 'code',
    showDebugInformation: true,
    clientId: '6491ec1d-2b6d-4665-9999-17ead343e660',
    dummyClientSecret:'dasda',
    scope: 'openid'
}
