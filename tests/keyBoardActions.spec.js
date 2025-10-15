const { test, expect } = require('@playwright/test')

test('KeyBoard Actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');
    // await page.locator('//textarea[contains(@placeholder,"Paste o")]').fill("Hello All..");

    await page.fill('//textarea[contains(@placeholder,"Paste o")]', 'Hello All..');

    // Ctrl + A       -> Select the text

    await page.keyboard.press('Control+A');

    // Ctrl + C       -> Copy the text

    await page.keyboard.press('Control+C');

    // Tab

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Ctrl + V       -> paste the text

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000);
    
});