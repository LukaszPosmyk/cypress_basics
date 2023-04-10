
const inputUsername = '#ba_username'
const inputPassword = '#ba_password'
const loginButton = 'button[onclick="onLoginSubmit()"]' 
const invalidCredentialsError = '#loginFormMessage'
const loggedInMessage = '#loggedInMessage'

class BasicAuthPage{

    loginWithEmptyUsernameAndPassword(){
        cy.get(inputUsername).clear()
        cy.get(inputPassword).clear()
        cy.get(loginButton).click()
        cy.get(invalidCredentialsError).should('be.visible')
    }

    loginWithIncorrectUsernameAndPassword(){
        cy.get(inputUsername).clear()
        cy.get(inputPassword).clear()
        cy.get(inputUsername).type('incorrectUsername')
        cy.get(inputPassword).type('incorretPassword')
        cy.get(loginButton).click()
        cy.get(invalidCredentialsError).should('be.visible')   
    }

    //username&password move to fixtures?
    loginWithCorrectUsernameAndPassword(){
        cy.get(inputUsername).clear()
        cy.get(inputPassword).clear()
        cy.get(inputUsername).type('admin')
        cy.get(inputPassword).type('admin')
        cy.get(loginButton).click()
        cy.get(loggedInMessage).should('be.visible')   
    }
}
export default BasicAuthPage