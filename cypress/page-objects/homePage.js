import Urls from "./urls";

const inputsHeader = '#inputs-header'
const checkboxHeader = '#checkbox-header'
const dropdownlistHeader = '#dropdownlist-header'
const hoversHeader = '#hovers-header'
const basicAuthHeader = '#basicauth-header'
const formHeader ='#form-header'
const keyPressesHeader = '#keypresses-header'
const addRemoveElementsHeader = '#addremoveelements-header'
const statusCodesHeader = '#statuscodes-header'
const iFrameHeader = '#iframe-header'
const dragAndDropHeader =  '#draganddrop-header'
const dataPickerHeader = '#datepicker-header'

class HomePage{

    clickInputsTab(){
        cy.get(inputsHeader).click()
    }

    clickCheckboxesTab(){
        cy.get(checkboxHeader).click()
    }

    clickDropdownListTab(){
        cy.get(dropdownlistHeader).click()
    }

    clickHoversTab(){
        cy.get(hoversHeader).click()
    }

    clickBasicAuthTab(){
        cy.get(basicAuthHeader).click()
    }

    visitPage(){
        const url = new Urls()
        url.visitHomePage()
    }

    clickFormTab(){
        cy.get(formHeader).click()
    }

    clickKeyPressesTab(){
        cy.get(keyPressesHeader).click()
    }

    clickAddRemoveElementsPage(){
        cy.get(addRemoveElementsHeader).click()
    }

    clickStatusCode(){
        cy.get(statusCodesHeader).click()
    }

    clickIFrame(){
        cy.get(iFrameHeader).click()
    }

    clickDragAndDrop(){
        cy.get(dragAndDropHeader).click()
    }

    clickDataPicker(){
        cy.get(dataPickerHeader).click()
    }


}

export default HomePage;