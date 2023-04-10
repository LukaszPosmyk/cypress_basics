
const iFrame = 'iframe'
const przycisk1 = '#simpleButton1'
const przycisk2 = '#simpleButton2'
const messageAfterClickButton = '#whichButtonIsClickedMessage'

const getIFrameContent = () => {
    return cy.get(iFrame)
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);
  };

class IFramePage{

    clickPrzycisk1(){
        
        getIFrameContent().find(przycisk1).click()
        getIFrameContent().find(messageAfterClickButton).should('have.text', 'Button 1 was clicked!')
    }

    clickPrzycisk2(){
        getIFrameContent().find(przycisk2).click()
        getIFrameContent().find(messageAfterClickButton).should('have.text', 'Button 2 was clicked!')
    }

    
}
export default IFramePage;
