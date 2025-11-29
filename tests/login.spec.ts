import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {

const baseURL = 'https://qatraining.fr/pages/features/login.html';

test('should login successfully with valid credential', async ({ page }) => {
await page.goto(baseURL);
await page.fill('#usename', 'safa');
await page.fill('#password', 'safa123');
await page.click('//button[normalize-space()="Se connecter"]');;
    
});



});