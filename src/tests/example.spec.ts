import { test, expect } from '@playwright/test';
import { decryptData, encryptData } from '../utils/CryptoJSUtils';


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('sample env test', async () => {
  console.log('User ID:', process.env.userid!);
  console.log('Email:', process.env.email!);
  console.log('Password:', process.env.password!);
});

test('Data Encryption', () => {
  const plainText = "Hello chief";
  const encryptedData = encryptData(plainText);
  console.log("Salt:", process.env.SALT);
  console.log("encryptData:", encryptedData);
  const decryptedData = decryptData(encryptedData);
  console.log("DecryptedData:", decryptedData);
});