import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Valid Login Test', async () => {
        await loginPage.fillUserName('valid_username');
        await loginPage.fillPassword('valid_password');
        await loginPage.login();
        // Add assertions to verify successful login
    });
    test('Invalid Login Test', async () => {
        await loginPage.fillUserName('invalid_username');
        await loginPage.fillPassword('invalid_password');
        await loginPage.login();
        // Add assertions to verify error message is shown
    });
});
