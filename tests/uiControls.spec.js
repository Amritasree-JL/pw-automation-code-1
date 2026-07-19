const {test, expect} = require('@playwright/test');

test('UI Controls',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const signinbtn = page.locator("#signInBtn");
    const drpdwn = page.locator("select.form-control");
    const radio = page.locator(".radiotextsty");
    const okaybtn = page.locator("button#okayBtn");
    const checkbox = page.locator("input#terms");
    const doclink = page.locator("[href*=documents-request]");
    await drpdwn.selectOption("consult");  //selecting an option from the dropdown
    await radio.last().click();
    await okaybtn.click();
    console.log(await radio.last().isChecked());
    await expect(radio.last()).toBeChecked(); //assertion to check if radio button is checked method 1
    //await page.pause();   //to pause execution and open playwright inspector for debugging
    await checkbox.click();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    console.log(checkbox.isChecked());
    expect(await checkbox.isChecked()).toBeFalsy(); //expected value is false ie assertion to check that the checkbox is unchecked. Here await is applied inside because, await works only where actual actions are performed. isfalsey is onky like boolean operator.
    await expect(doclink).toHaveAttribute("class","blinkingText");   // to check for blinking text with class attibute that has value blinkingText
});