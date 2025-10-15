const { test, expect } = require('@playwright/test')

test('Single File', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').click();
    await page.locator('#filesToUpload').setInputFiles('tests/uploadFiles/Test3.pdf');

    await page.waitForTimeout(2000);

});

test('Multiple File', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/Test3.pdf', 'tests/uploadFiles/Test4.pdf']);

    await page.waitForTimeout(2000);

    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Test3.pdf');
    await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Test4.pdf');

    await page.waitForTimeout(2000);

    // Removing Files
    
    await page.locator('#filesToUpload').setInputFiles([]);
    await page.waitForTimeout(2000);

    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
    await page.waitForTimeout(2000);

});