const { test, expect } = require('@playwright/test')

test('Mouse Double Click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const copyBtn = await page.locator('//button[text()="Copy Text"]');

    // Double Click

    await copyBtn.dblclick();

    const f2 = await page.locator('#field2');

    await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(2000);
});