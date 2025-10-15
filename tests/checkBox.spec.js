const { test, expect } = require('@playwright/test')

test('Handle CheckBox', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Single CheckBox

    //await page.locator('//input[@id="checkBoxOption1"]').check();
    await page.check('//input[@id="checkBoxOption1"]');

    await expect(await page.locator('//input[@id="checkBoxOption1"]')).toBeChecked();

    await expect(await page.locator('//input[@id="checkBoxOption1"]').isChecked()).toBeTruthy();

    await page.waitForTimeout(2000);

    await page.uncheck('//input[@id="checkBoxOption1"]');

    await expect(await page.locator('//input[@id="checkBoxOption1"]')).not.toBeChecked();

    await expect(await page.locator('//input[@id="checkBoxOption2"]').isChecked()).toBeFalsy();


    await page.waitForTimeout(2000);

    // Multiple Checkboxes

    const checkBoxLocators = [
        '//input[@id="checkBoxOption1"]',
        '//input[@id="checkBoxOption2"]',
        '//input[@id="checkBoxOption3"]'
    ];

    for (const locators of checkBoxLocators) {
        await page.locator(locators).check();
    }

    await page.waitForTimeout(2000);

    for (const locators of checkBoxLocators) {  // Unselect multiple checkBoxes which are already selected..
        if (await page.locator(locators).isChecked()) {
            await page.locator(locators).uncheck();
        }
    }

    await page.waitForTimeout(3000);
});