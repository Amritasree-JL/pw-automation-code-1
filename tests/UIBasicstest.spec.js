const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test',async ({browser})=>
{
    const context = await browser.newContext(); //a new browser instance
    const page = await context.newPage(); //to create a new page in the browser
    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const signinbtn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); // to hit the url on the new page
    console.log(await page.title());
    await username.fill("amritanair");
    await password.fill("amrita123");
    await signinbtn.click();
    console.log(await page.locator("[style*='block']").textContent()); //autowait will work
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await username.fill("");
    await username.fill("rahulshettyacademy");
    await password.fill("");
    await password.fill("Learning@830$3mK2");
    await signinbtn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});

test('Assignment1',async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const email = page.locator("input#userEmail");
    const password = page.locator("[type='password']");
    const loginBtn = page.locator("input#login");
    const cardTitle = page.locator(".card-body b");
    await email.fill("testaccountu@gmail.com");
    await password.fill("Test123!");
    await loginBtn.click();
    console.log(await cardTitle.first().textContent());
    //const all = await cardTitle.allTextContents();
   // console.log(all);
});

test('EventHub Login',async ({page})=>
{
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    console.log(page.title());
    const emailid = page.locator("input#email");
    const pwd = page.locator("[type='password']");
    const lb = page.locator("[type='submit']");
    await emailid.fill("amritas124@gmail.com");
    await pwd.fill("Amrita123!");
    await lb.click();
    console.log("Successfully LoggedIn");
});
test('Page Playwright test',async ({page})=>
{
    await page.goto("https://google.com"); // to hit the url on the new page
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    
});