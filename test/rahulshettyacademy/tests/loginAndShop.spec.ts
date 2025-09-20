import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';
import { ShopPage } from '../pageobjects/ShopPage';

test('Login and verify iPhone X in shop', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await loginPage.login('rahulshettyacademy', 'learning');

    await page.waitForURL('**/angularpractice/shop', { timeout: 10000 });
    expect(page.url()).toContain('/angularpractice/shop');

    const shopPage = new ShopPage(page);
    const isIphonePresent = await shopPage.isProductPresent('iphone X');
    expect(isIphonePresent).toBeTruthy();
    // Verify that the product is present in the shop
});
