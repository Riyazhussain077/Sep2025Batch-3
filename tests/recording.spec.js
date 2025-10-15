const { test, expect } = require('@playwright/test')

test('Auto Suggest', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('//input[@id="autocomplete"]').fill('ind');

    await page.waitForSelector('//li[@class="ui-menu-item"]/div');
    const countryOptions = await page.$$('//li[@class="ui-menu-item"]/div');
    for (let option of countryOptions) {
        let value = await option.textContent();
         //console.log(value);
        if (value.includes('Indonesia')) {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
});