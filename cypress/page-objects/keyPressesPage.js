const input = '#target'
const keyPressResult = '#keyPressResult'

class KeyPressesPage{

    typeNumberIntoField(){
        cy.get(input).clear()
        cy.get(input).type('1')
        cy.get(keyPressResult).should('contain', '1')

    }
 
    typeLettersIntoField(){
        cy.get(input).clear()
        cy.get(input).type('a')
        cy.get(keyPressResult).should('contain', 'A')
    }
}
export default KeyPressesPage;