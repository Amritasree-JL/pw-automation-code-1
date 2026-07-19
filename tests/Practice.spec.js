const {test,expect} = require('@playwright/test');

test('sample playwright test',async({page}) =>{
    await page.goto("https://example.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Example Domain");
});