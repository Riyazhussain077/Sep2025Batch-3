const { test, expect } = require('@playwright/test')

test('Home Page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Login Page
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.click("//button[text()='Log in']");


    // Home Page
    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);

    // Logout Page

    await page.locator('//a[contains(text(),"Log o")]').click();

});

test('Product to Cart', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Login Page
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.click("//button[text()='Log in']");

    // Add product to Cart

    await page.locator('//a[text()="Sony xperia z5"]').click();
    await page.locator('[onclick="addToCart(6)"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });


    // Logout Page

    await page.locator('//a[contains(text(),"Log o")]').click();

});