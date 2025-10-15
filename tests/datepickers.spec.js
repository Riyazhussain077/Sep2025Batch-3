const { test, expect } = require('@playwright/test')

test('Date Pickers', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.fill('input#datepicker', "10/10/2025");

    // Date Pickers

    const year = "1998";
    const month = "June";
    const date = "15";


    await page.locator('//input[@id="datepicker"]').click()   // opens Calender..

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear == year && currentMonth == month) {
            break;
        }

        //await page.locator('[title="Next"]').click();  // next
        await page.locator('[title="Prev"]').click(); // Past
    }

    const dates = await page.$$('.ui-state-default')

    // Date Selection using loop

    for(const dt of dates) {
        if (await dt.textContent() == date) {
            await dt.click();
            break;
        }
    }

    // Date selection - without loop

    //await page.click('//a[@class="ui-state-default"][text()="30"]');

    await page.click(`//a[@class="ui-state-default"][text()='${date}']`);

    await page.waitForTimeout(2000);

});


