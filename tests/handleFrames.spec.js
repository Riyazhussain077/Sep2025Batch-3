const { test, expect } = require('@playwright/test')

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Total Frames

    const allFrames = await page.frames();
    console.log("Number of Frames: ", allFrames.length);

    // Approach 1: using name or URL...

    // const frameName = await page.frame('name'); // if name is present, we can use that..
    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    // await frame1.locator('[name="mytext1"]').fill('Good Afternoon!');


    // Approach 2 : using frameLocator

    const inputField = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
    await inputField.fill('Hello all..')

    await page.waitForTimeout(3000);

});