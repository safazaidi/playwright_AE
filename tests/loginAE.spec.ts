import { test } from '@playwright/test';
import { LoginPage } from  '../pages/LoginPage';

test.describe('Automation Exercise login', () =>{
    test('successful login with valid credentials', async ({page}) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('qa.test.user03@example.com', 'qatester03+');
    await login.expectLoginSuccess();

    });

    test('login fails with invalid credentials', async ({page}) => {
          const login = new LoginPage(page);
    await login.goto();
    await login.login('ka.test.user03@example.com', 'qatester03+')
    await login.expectLoginFailure();  
    })
    
});