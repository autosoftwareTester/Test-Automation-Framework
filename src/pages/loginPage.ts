import { Page } from '@playwright/test';

export class LoginPage {
    private readonly usernameInput = '#Username';
    private readonly passwordInput = '#Password';
    private readonly loginButton = '#Login';

    constructor(private page: Page) { }

    public async navigate() {
        await this.page.goto('/');
    }

    public async fillUserName(username: string) {
        await this.page.fill(this.usernameInput, username);
    }
    public async fillPassword(password: string) {
        await this.page.fill(this.passwordInput, password);

    }
    public async login() {
        await this.page.locator(this.loginButton).click()
            .catch(async (error) => {
                console.error('Login button click failed:', error);
                // Optionally, take a screenshot for debugging
                await this.page.screenshot({ path: 'login-button-error.png' });
                throw error; // Re-throw the error after logging
            });
    }
}