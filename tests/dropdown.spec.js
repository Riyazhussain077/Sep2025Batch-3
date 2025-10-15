const { test, expect } = require('@playwright/test')

test('Handle Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //  Multiple ways to select option from the dropdown

    await page.locator('#country').selectOption({ label: 'Germany' }); // label in visible text..
    await page.locator('#country').selectOption('France'); // visible text
    await page.locator('#country').selectOption({ value: "usa" }); // by using value..
    await page.locator('#country').selectOption({ index: 5 }); // by using index..
    await page.selectOption('#country', 'Japan'); // by text.


    // Assertions

    // 1) check the number of options in dropdown       -> Method 1

    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // 2) check the number of options in dropdown       -> Method 2

    // const options = await page.$$('#country option');
    // console.log("Number of options :" , options.length);
    // await expect(options.length).toBe(10);

    // 3) check presence of value in the dropdown        -> Method 1

    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('usa')).toBeFalsy();


    // 4) check presence of value in the dropdown        -> Method 2 (using loop)

    const options = await page.$$('#country option');

    for(const option of options) {
        console.log(await option.textContent());

        let value = await option.textContent();
        if(value.includes('United Kingdom')) {
            break;
        }
        
    }

    await page.waitForTimeout(2000);
});