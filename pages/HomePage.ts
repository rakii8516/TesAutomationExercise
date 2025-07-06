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
    await this.page.fill(HomePageLocators.emailId, 'rakii8516@gmail.com');   
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
    
    console.log('rakii8516@gmail.com', eValue);
    expect(eValue).toContain(eValue);
    
   }
}