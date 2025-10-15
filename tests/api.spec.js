const { test, expect } = require('@playwright/test')


test('Mocking API', async ({ page }) => {

    //  1) Mocking The API

    await page.route('https://jsonplaceholder.typicode.com/posts', async route => {

        await route.fulfill({
            status: 404,
            contentType: 'application/json',
            body: JSON.stringify([{ title: 'Mocked Post', id: 1 }])
        });
    });

    // 2) Open the page that calls the API

    await page.goto('https://jsonplaceholder.typicode.com/posts');

    // 3) Validate the fake data

    const text = await page.locator('body').innerText();
    await expect(text).toContain('Mocked Post');

});

// 1) GET      -> Fetch All the Data

test('GET - Fetch All The Data', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    await expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Total posts fetched:", body.length);
    expect(body.length).toBeGreaterThan(0);
});

// 2) POST    -> Create a new Post with the data

test('POST - Create a post with the data', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: "QA Automation with Playwright",
            body: "This is pure API Automation",
            userId: 171   // We can set any cutom user ID
        }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log("Created Post ID:", body.id)
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('QA Automation with Playwright');
});

// 3) PUT        -> Update an existing data

test('PUT' - "Updates a Data", async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: "Using API in Automation tool",
            body: "We are using APIRequestContext",
            userId: 171
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log("Updated Post Title: ", body.title);
    expect(body.title).toBe('Using API in Automation tool')
});

// 4) DELETE   - Delete a post

test('DELETE - Delete the post', async ({ request }) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    console.log('Post deleted successfully');
});

