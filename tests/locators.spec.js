const { test, expect } = require('@playwright/test')

test('Loactors', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Click on Login Button                ->  CSS

    await page.locator('#login2').click();
    //await page.click('#login2');

    // Provide username                      -> CSS
    await page.waitForTimeout(1000);
    await page.locator('[id="loginusername"]').fill('pavanol');
    //await page.fill('[id="loginusername"]' , 'pavanol');

    // Provide passWord                      -> Xpath
    await page.waitForTimeout(1000);
    //await page.locator('//input[@id="loginpassword"]').fill('test@123');
    await page.fill('//input[@id="loginpassword"]', 'test@123');

    // Click On Login Button                  -> Xpath
    await page.waitForTimeout(1000);
    //await page.locator('//button[text()="Log in"]').click();
    await page.click("//button[text()='Log in']");

    // Verify logout link presense    

    const logOut = await page.locator('//a[@id="logout2"]');
    await expect(logOut).toBeVisible();

    await page.waitForTimeout(1000);

});


