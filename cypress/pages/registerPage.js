// const data = require('../fixtures/testData.json')
// const email = (data.email+
//     Date.now()+"@gmail.com");

const myAccount_Locator='a[title="My Account"]'
const register_Locator='a=contains("Register")'
const logout_Locator='a'
const firstName_Locator='input[name="firstname"]'
const lastName_Locator='input[name="lastname"]'
const email_Locator='input#input-email'
const telephone_Locator='input#input-telephone'
const password_Locator='input#input-password'
const confirmPassword_Locator='input#input-confirm'
const agreePolicy_Locator='input[name="agree"]'
const continue_Locator='input.btn.btn-primary'
const successMessage_Locator='h1'


export default class registerPage {


    openUrl() {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        
    }

    clickOnRegisterButton() {

        cy.get(myAccount_Locator).click()
        cy.get(register_Locator).click()
    }

    enterFirstName(Fname) {
        cy.get(firstName_Locator).type(Fname)
    }

    enterLastName(Lname) {
        cy.get(lastName_Locator).type(Lname);

    }

     
     enterEmailId(email) {
        cy.get(email_Locator).type(email);
 
     }
  

    enterPhoneNumber(PhoneNum) {
        cy.get(telephone_Locator).type(PhoneNum);
    }


    enterPassword(Pswd) {
        cy.get(password_Locator).type(Pswd);
        

    }
    enterConfirmPassword(Pswd){
        cy.get(confirmPassword_Locator).type(Pswd);
    }


    selectPrivacyPolicy() {
        cy.get(agreePolicy_Locator).check();

    }
    clickContinue() {
        cy.get(continue_Locator).click();

    }
    verifySuccessMessage(text)
    {
        cy.get(successMessage_Locator).contains(text)
        
    }
    LogOut(){
        cy.get(myAccount_Locator).click();
        cy.get(logout_Locator).contains('Logout').click();
       
    }

}
