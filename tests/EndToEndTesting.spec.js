const { test, expect } = require('@playwright/test');


test.only('End to ENd Testing', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator('#login').click();

    await page.pause();
}
)