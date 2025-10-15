const { test, expect } = require('@playwright/test')

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.click("//button[text()='Log in']");

});

test.afterAll(async () => {

    await page.locator('//a[contains(text(),"Log o")]').click();

})

test('Home Page', async () => {

    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);

});

test('Product to Cart', async () => {

    await page.locator('//a[text()="Sony xperia z5"]').click();
    await page.locator('[onclick="addToCart(6)"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

});