import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { GetFilePath} from "../utils/Commons";

test.describe('Login Tests', () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test.skip('Valid Login Test', async () => {
        await loginPage.fillUserName('valid_username');
        await loginPage.fillPassword('valid_password');
        await loginPage.login();
        // Add assertions to verify successful login
    });

    test.skip('Invalid Login Test', async () => {
        await loginPage.fillUserName('invalid_username');
        await loginPage.fillPassword('invalid_password');
        await loginPage.login();
        // Add assertions to verify error message is shown
    });

    test('Test Anything', async () => {
        console.log('Environment Path:', GetFilePath());
        
    });
});
