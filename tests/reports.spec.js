const { test, expect } = require('@playwright/test')

test('Test 1', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await expect(page).toHaveURL('https://www.flipkart.com/');
});

test('Test 2', async ({ page }) => {
    await page.goto('https://www.ajio.com/');
    await expect(page).toHaveTitle('Online Shopping Site for Women, Men, Kids Fashion, Lifestyle & More.');
});

test('Test 3', async ({ page }) => {

    await page.goto('https://www.tataneu.com/');
    await expect(page).toHaveURL('https://www.tataneu.com/');
});