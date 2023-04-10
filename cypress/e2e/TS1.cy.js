import HomePage from '../page-objects/homePage'
import InputPage from '../page-objects/inputPage'
import CheckboxPage from '../page-objects/checkboxPage'
import DropdownListPage from '../page-objects/dropdownListPage'
import HoversPage from '../page-objects/hoversPage'
import BasicAuthPage from '../page-objects/basicAuthPage'
import FormPage from '../page-objects/formPage'
import KeyPressesPage from '../page-objects/keyPressesPage'
import AddRemoveElementsPage from '../page-objects/addRemoveElementsPage'
import StatusCodesPage from '../page-objects/statusCodesPage'
import IFramePage from '../page-objects/iFramePage'
import DragAndDropPage from '../page-objects/dragAndDropPage'
import DataPickerPage from '../page-objects/datePickerPage'


describe('my first scenario', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('test inputs', function () {

        const homePage = new HomePage();
        homePage.clickInputsTab()
        
        const inputPage = new InputPage();
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()
        
        
    })

    it('test checkbox', function () {

        const homePage = new HomePage();
        homePage.clickCheckboxesTab()
        
        const checkBoxPage = new CheckboxPage();
        checkBoxPage.checkFirstCheckbox()
        checkBoxPage.uncheckLastCheckbox()
        
    })

    it('test dropdown list', function () {

        const homePage = new HomePage();
        homePage.clickDropdownListTab()
        
        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseFirstOptionFromDropdownList()
        
                
    })

    it('test hover', function () {

        const homePage = new HomePage();
        homePage.clickHoversTab()
        
        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
                
    })

    it('test basicAuth', function(){
        
        const homePage = new HomePage();
        homePage.clickBasicAuthTab()

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.loginWithEmptyUsernameAndPassword()
        basicAuthPage.loginWithIncorrectUsernameAndPassword()
        basicAuthPage.loginWithCorrectUsernameAndPassword()    

    })

    it('test form', function(){
        
        const homePage = new HomePage();
        homePage.clickFormTab()
        
        const formPage = new FormPage();
        formPage.leaveFormEmpty()
        formPage.leaveLastNameEmpty()
        formPage.fillFormWithFirstAndLastName()

    })

    it('test keyPresses', function(){
        
        const homePage = new HomePage();
        homePage.clickKeyPressesTab()

        const keyPressesPage = new KeyPressesPage();
        keyPressesPage.typeNumberIntoField()
        keyPressesPage.typeLettersIntoField()

    })    

    it('test add/removeElements', function(){
        
        const homePage = new HomePage();
        homePage.clickAddRemoveElementsPage()

        const addRemoveElementsPage = new AddRemoveElementsPage();
        addRemoveElementsPage.addElement()
        addRemoveElementsPage.deleteElement()

    })

    it('test statusCodes', function(){
        
        const homePage = new HomePage();
        homePage.clickStatusCode()

        const statusCodesPage = new StatusCodesPage()
        statusCodesPage.checkStatusCode200()
        statusCodesPage.checkStatusCode305()
        statusCodesPage.checkStatusCode404()
        statusCodesPage.checkStatusCode500()


    })
    it( 'test iFrame', function(){

        const homePage = new HomePage();
        homePage.clickIFrame()

        const iFramePage = new IFramePage()
        
        iFramePage.clickPrzycisk1()
        iFramePage.clickPrzycisk2()
    })

    it( 'test dragAndDrop', function(){

        const homePage = new HomePage();
        homePage.clickDragAndDrop()

        const dragAndDrop = new DragAndDropPage()
        dragAndDrop.dragAndDropElement()        
    })
  
    it( 'test dataPicker', function(){

        const homePage = new HomePage();
        homePage.clickDataPicker()

        const dataPicker = new DataPickerPage();
        dataPicker.chooseCorrectDate()
        dataPicker.chooseIncorrectDate()                 
    })
})