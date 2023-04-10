

class DataPickerPage{

    chooseCorrectDate(){
        cy.get('#start').click('bottomRight')
        cy.get('#start').type('2023-07-31')
        cy.get('#start').should('have.value', "2023-07-31")
    }

    chooseIncorrectDate(){
        Cypress.on('fail', (error, runnable) => {

            if (!error.message.includes('requires a valid date')) {

                throw error
            }  

    })
        cy.get('#start').click('bottomRight')
        cy.get('#start').type('2023-07-32')
        

}} export default  DataPickerPage;