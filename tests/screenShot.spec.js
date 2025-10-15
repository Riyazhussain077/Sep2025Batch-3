const { test, expect } = require('@playwright/test')

test('Page ScreenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({ path: 'tests/screenShot/' + Date.now() + 'HomePage.png' });
});

test('FullPage ScreenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({ path: 'tests/screenShot/' + Date.now() + 'FullPage.png', fullPage: true });
});

test.only('Element ScreenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('//a[@aria-label="Home decor" and @target="_blank"]')
        .screenshot({ path: 'tests/screenShot/' + Date.now() + 'SelectItem.png' });
});

