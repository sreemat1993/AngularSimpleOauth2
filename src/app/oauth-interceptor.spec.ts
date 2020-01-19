import { OauthInterceptor } from './oauth-interceptor';

describe('OauthInterceptor', () => {
  it('should create an instance', () => {
    expect(new OauthInterceptor(private authStorage: OAuthStorage,
      private errorHandler: OAuthResourceServerErrorHandler,
      @Optional() private moduleConfig: OAuthModuleConfig)).toBeTruthy();
  });
});
