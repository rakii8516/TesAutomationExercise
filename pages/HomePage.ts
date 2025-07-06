import { Page, expect } from '@playwright/test';
import { HomePageLocators } from './HomePageLocators';

export class HomePage {
  readonly page: Page;
  
  readonly homeBanner: string = 'div[class="carousel-inner"]';
    
  

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/');
  }

  async verifyHomePageVisible() {
    await expect(this.page.locator(this.homeBanner)).toBeVisible();
  }

  async verifyTitle() {
    await expect(this.page.locator(HomePageLocators.expectedTitle)).toBeVisible;
  }
  async ClickSignup() {    
    await this.page.click(HomePageLocators.signupLoginBtn);    
  }
  
  async VerifynewUserSignup(){    
    await this.page.locator(HomePageLocators.NewUserVerify);
  }
  
  async enterNameAndEmail(){     
    await this.page.fill(HomePageLocators.userName, 'Rakesh Kumar');
    await this.page.fill(HomePageLocators.emailId, 'ranasa1322@gmail.com');   
  }
  
  async clickSubmitButton(){ 
    
    await this.page.click(HomePageLocators.submitButton);
    console.log('Click on Submit Button');
  }
  async verifyAccountInformationVisble(){
   
    const userInput = this.page.locator(HomePageLocators.readName);
    const value=await userInput.inputValue();
    
    console.log('Rakesh Kumar', value);
    expect(value).toContain(value);
    

    const emailInput = this.page.locator(HomePageLocators.readEmailId);
    const eValue=await emailInput.inputValue();
    
    console.log('ranasa1322@gmail.com', eValue);
    expect(eValue).toContain(eValue);
    


   }
   async filldetails(){
    await this.page.click(HomePageLocators.title);
    await this.page.fill(HomePageLocators.password, 'Bsnl@94673');
    await this.page.selectOption(HomePageLocators.dayofBirth, '1');
    await this.page.selectOption(HomePageLocators.monthofBirth, 'January');
    await this.page.selectOption(HomePageLocators.yearofBirth, '1990');
    await this.page.fill(HomePageLocators.FirstName, 'Rakesh');
    await this.page.fill(HomePageLocators.LastName, 'Kumar');
    await this.page.fill(HomePageLocators.address, '4 compton crescent taita');
    await this.page.selectOption(HomePageLocators.country, 'New Zealand');
    await this.page.fill(HomePageLocators.state, 'Wellington');
    await this.page.fill(HomePageLocators.city, 'Lower Hutt');  
    await this.page.fill(HomePageLocators.zipcode, '5011');
    await this.page.fill(HomePageLocators.mobileNumber, '0211216320');

   }
   async createAccountBtn(){
   await this.page.click(HomePageLocators.createAccountBtn); 
    console.log('Click on Create Account Button');
    await this.page.click(HomePageLocators.accountcreatedContinueBtn);
    }

    async verifyLoggedInUser() {
      const loggedInText = this.page.locator(HomePageLocators.loggedInAsUserText);
      await expect(loggedInText).toBeVisible();
      const textContent = await loggedInText.textContent();
    }
    async deleteAccount() {
      await this.page.click(HomePageLocators.deleteAccountBtn);
    }
    async deletebuttonContinue() {
      await this.page.click(HomePageLocators.deletebuttonContinue);
    }
}