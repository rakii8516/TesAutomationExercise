import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';



test('Launch AutomationExercise and verify home page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  //await homePage.verifyHomePageVisible();
  await homePage.verifyTitle();
  await homePage.ClickSignup();
  await homePage.VerifynewUserSignup();
  await homePage.enterNameAndEmail();
  await homePage.clickSubmitButton();
  await homePage.verifyAccountInformationVisble();
  await homePage.filldetails()
  await homePage.createAccountBtn();
  await homePage.verifyLoggedInUser();
  await homePage.deleteAccount();  
  await homePage.deletebuttonContinue()
});