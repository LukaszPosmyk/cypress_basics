
const firstNameInput = '#fname'
const lastNameInput = '#lname'
const submitButton = '#formSubmitButton'

class FormPage{
    
    leaveFormEmpty(){
        const stub = cy.stub()
        cy.on('window:alert', stub)    

        cy.get(firstNameInput).clear()
        cy.get(lastNameInput).clear()        
        cy.get(submitButton).click()
            .then(() =>{
                expect(stub).to.not.be.called;
            })            
    }

    leaveFirstNameEmpty(){
        const stub = cy.stub()
        cy.on('window:alert', stub)
        
        cy.get(firstNameInput).clear()
        cy.get(lastNameInput).clear()      
        cy.get(lastNameInput).type("Gołota")  
        cy.get(submitButton).click()
        .then(() => {
            expect(stub).to.not.be.called;

        })
    }

    leaveLastNameEmpty(){
        const stub = cy.stub()
        cy.on('window:alert', stub)
        
        cy.get(firstNameInput).clear()
        cy.get(firstNameInput).type("Andrzej")
        cy.get(lastNameInput).clear()      
        cy.get(submitButton).click()
        .then(() => {
            expect(stub).to.not.be.called;

        })
    }

    fillFormWithFirstAndLastName(){
        cy.get(firstNameInput).type("Andrzej")
        cy.get(lastNameInput).type("Gołota")
        cy.get(submitButton).click()
        
        cy.on('window:alert', (text) => {
            expect(text).to.contains('success');
          });
    }
   
}
export default FormPage;