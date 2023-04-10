const elementA = '#column-a'
const elementB = '#column-b'



class DragAndDropPage{

    dragAndDropElement(){
    
        cy.get(elementA).drag(elementB)
        cy.get(elementB).should('have.text', 'A' )

    }
}
export default DragAndDropPage;