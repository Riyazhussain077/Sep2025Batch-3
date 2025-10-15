const { test, expect } = require('@playwright/test')
const loginData = require('../test-data/loginData.json'); // Import the data's from the json file

for (const data of loginData) {

    test(`Test Data : ${data.username}`, async ({ page }) => {

        await page.goto('https://www.demoblaze.com/');

        await page.click('#login2');

        await page.fill('#loginusername', data.username);
        await page.fill('#loginpassword', data.password);

        await page.click('[onclick="logIn()"]');


        await page.waitForTimeout(3000);
    }
    )};