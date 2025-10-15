const { test, expect } = require('@playwright/test')

test('Soft Assertions', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    // Hard Assertions

    await expect(page).toHaveURL('htts://www.amazon.in/');
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    await expect(await page.locator('#nav-logo-sprites')).toBeVisible();

    // Soft Assertions

    await expect.soft(page).toHaveURL('htts://www.amazon.in/');
    await expect.soft(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    await expect.soft(await page.locator('#nav-logo-sprites')).toBeVisible();


});