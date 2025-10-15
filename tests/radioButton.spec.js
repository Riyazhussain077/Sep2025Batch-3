const { test, expect } = require('@playwright/test')

test('Handle RadioButton', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Radio Button

    await page.locator('//input[@value="radio3"]').check();
    //await page.check('//input[@value="radio3"]');

    await expect(await page.locator('//input[@value="radio3"]')).toBeChecked();
    await expect(await page.locator('//input[@value="radio3"]').isChecked()).toBeTruthy();

    await expect(await page.locator('//input[@value="radio1"]').isChecked()).toBeFalsy();

    await page.waitForTimeout(2000);

});