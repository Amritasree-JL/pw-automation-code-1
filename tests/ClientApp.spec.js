const {test, expect} = require('@playwright/test');

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
    await page.waitForLoadState('networkidle'); //wait until network calls are in idle state or all calls are successfully made. Sometimes this step is being flaky so we will use another alternate wait
    //await cardTitle.waitFor(); //alternative for loadstatewait as it is flaky. This one simply waits for the card-body b locator.
    //Now there's a catch. but wait for works only when single element is returned.But in our case an array/multiple elements is being returned.Therefore we can give as below to take the first matching element
    await cardTitle.first().waitFor();
    //console.log(await cardTitle.first().textContent());
    const all = await cardTitle.allTextContents();  //allTextContent does not wait for the page to be loaded fully.It will immediately give and empty list.That's why in previous step we introduced waitForLoadState()
    console.log(all);
});