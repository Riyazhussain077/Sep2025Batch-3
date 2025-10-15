const { test, expect } = require('@playwright/test')

test('Handle InputBox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // InputBox   -> Assertions

    await expect(await page.locator('//input[@id="email"]')).toBeVisible();
    await expect(await page.locator('//input[@id="email"]')).toBeEmpty();
    await expect(await page.locator('//input[@id="email"]')).toBeEnabled();
    await expect(await page.locator('//input[@id="email"]')).toBeEditable();

    //await page.locator('//input[@id="email"]').fill("Testdemo@123");

    await page.fill('//input[@id="email"]', 'TestDemo@123');

    await page.waitForTimeout(3000);


});