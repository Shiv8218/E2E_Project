// import registerData from "../../fixtures/registerData.json"
// const data = require('../fixtures/testData.json')

import registerPage from "../../pages/registerPage"
const registerObj = new registerPage()

// const email = ("Shiv"+Date.now()+"@gmail.com")

describe('Test automation',()=>{
    let creds;
    before(()=>{
        cy.fixture('registerData.json').then((data) =>{
            creds = data
        })
    })

    it('Register flow',()=>{
        const email = ("Shiv"+Date.now()+"@gmail.com")
        
        registerObj.openUrl()
        registerObj.enterFirstName(creds.firstName)
        registerObj.enterLastName(creds.lastName)
        registerObj.enterEmailId(email)
        registerObj.enterPhoneNumber(creds.telephone)
        registerObj.enterPassword(creds.password)
        registerObj.enterConfirmPassword(creds.cnf_password)
        registerObj.selectPrivacyPolicy()
        registerObj.clickContinue()
        registerObj.verifySuccessMessage(creds.assertion)
        registerObj.LogOut()

    })

})