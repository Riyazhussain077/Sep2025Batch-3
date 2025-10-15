const { test, expect } = require('@playwright/test')

test('Handling Tables', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('//table[@id="productTable"]');

    // 1) Total number of columns and rows

    const columns = await table.locator('thead tr th');
    console.log("Number of columns:", await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log("Number of Rows:", await rows.count());
    expect(await rows.count()).toBe(5);

    // 2) Select any check box from the table

    const selectedCheckBox = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    const checkBox = selectedCheckBox.locator('input').first();
    await checkBox.check();


    // 3) Select multiple product by using reusable function

    await selecProduct(rows, page, 'Smartphone');
    await selecProduct(rows, page, 'Laptop');
    await selecProduct(rows, page, 'Tablet');
    await selecProduct(rows, page, 'Wireless Earbuds');


    // 4) Print all the product details using loop

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td');

        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());

        }
    }

    // 5) Read all the data's from the table..

    const pages = await page.locator('.pagination li a');
    console.log("Number of pages in the table:", await pages.count());

    for (let a = 0; a < await pages.count(); a++) {
        if (a > 0) {
            await pages.nth(a).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());

            }
        }

    }
    await page.waitForTimeout(2000);
});

async function selecProduct(rows, page, name) {
    const selectedCheckBox = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await selectedCheckBox.locator('input').check();

};