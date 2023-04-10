const addElementButton = 'button[onclick="addElement()"]'
const deleteElementButton = 'button[class="added-manually"]'

class AddRemoveElementsPage {

    addElement(){
        cy.get(addElementButton).click()
        cy.get(deleteElementButton).should('be.visible')

    }

    deleteElement(){
        cy.get(deleteElementButton).click()
        cy.get(deleteElementButton).should('not.exist')

    }


}
export default AddRemoveElementsPage