const { test, expect } = require('@playwright/test');

test('Hare Krishna First Test', async ({ page }) => {

    await page.goto('https://www.google.come');
    console.log(page.title());
    await expect(page).toHaveTitle('Google');
})

test('Hare Krishna 2nd Test', async ({ page }) => {

    // await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
    // console.log(page.title());
    // await expect(page).toHaveTitle('rahul');
    // await page.locator('#username').fill('rahulshetty');
    // await page.locator('#password').fill('learning');
    // await page.locator('#signInBtn').click();
    // console.log(await page.locator('.alert-danger').textContent());
    // await expect(page.locator('.alert-danger')).toContainText('Incorrect');

    // await page.locator('#username').fill('anshika@gmail.com');
    // await page.locator('#password').fill('Iamking@000');
    // await page.locator('#signInBtn').click();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await page.pause();
})