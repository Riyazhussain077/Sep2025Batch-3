const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');

test('POM', async ({ page }) => {

    // Log in
    const login = new LoginPage(page);
    await login.launchURl();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(2000);

    // Home

    const home = new HomePage(page);
    await home.addProductToCart('HTC One M9');
    await page.waitForTimeout(2000);
    await home.goToCart();

    // Cart

    const cart = new CartPage(page);
    await page.waitForTimeout(2000);
    const status = await cart.checkProductInCart('HTC One M9');
    await expect(status).toBe(true);

});