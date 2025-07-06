import { APIRequestContext, expect, APIResponse } from '@playwright/test';

export class LoginApi {
  constructor(private request: APIRequestContext) {}

  async verifyLogin(email: string, password: string): Promise<APIResponse> {
    return await this.request.post('/api/verifyLogin', {
      form: { email, password },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  async verifyLoginMissingEmail(password: string): Promise<APIResponse> {
    return await this.request.post('/api/verifyLogin', {
      form: { password },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }
}