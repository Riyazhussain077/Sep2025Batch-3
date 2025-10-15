const { test, expect } = require("@playwright/test")

test('Alert with ok', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

// Enabling the dialog handler

page.on('dialog' , async dialog => {
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
});
await page.click('//button[@id="alertBtn"]');
await page.waitForTimeout(2000);
});

test('Confirm Alert', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

// Enabling the dialog handler

page.on('dialog' , async dialog => {
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept(); // close by using ok
   //await dialog.dismiss(); // close by using cancel..
});
await page.click('//button[@id="confirmBtn"]');
await expect(await page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
await page.waitForTimeout(2000);
});


test.only('prompt alert', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

// Enabling the dialog handler

page.on('dialog' , async dialog => {
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('Manoj'); // close by using ok
   //await dialog.dismiss(); // close by using cancel..
});
await page.click('//button[@id="promptBtn"]');
await expect(await page.locator('//p[@id="demo"]')).toHaveText('Hello Manoj! How are you today?');
await page.waitForTimeout(2000);
});



