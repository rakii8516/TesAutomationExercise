import { test, expect, request } from '@playwright/test';
import { LoginApi } from '../pages/API/LoginApi';


test.describe('Verify Login API', () => {
  let loginApi: LoginApi;

  test.beforeAll(async () => {
    const apiContext = await request.newContext({
      baseURL: 'https://automationexercise.com',
    });
    loginApi = new LoginApi(apiContext);
  });

  test('✅ Valid login returns 200 and User exists!', async () => {
    const email = 'rakii8516@gmail.com';      // ✅ Replace with a real registered email
    const password = 'Bsnl@94673';           // ✅ Replace with actual password

    const response = await loginApi.verifyLogin(email, password);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      responseCode: 200,
      message: 'User exists!',
    });
  });

  test('❌ Missing email returns 400 and error message', async () => {
    const response = await loginApi.verifyLoginMissingEmail('some_password');

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body).toMatchObject({
      responseCode: 400,
      message: 'Bad request, email or password parameter is missing in POST request.',
    });
  });
});