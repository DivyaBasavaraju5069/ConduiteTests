import loginElements from "../objects/login.obj"
import headerElements from "../objects/header.obj"
describe('Header', () => {
    /*beforeEach(() => {
        cy.visit('')
    })*/
    /*it('logged out user', () => {
        cy.visit('')
        cy.get(headerElements.SignInBtn).should('be.visible')
        cy.get(headerElements.SignOutBtn).should('be.visible')
        cy.get(headerElements.HomeLinkSigninPage).should('be.visible')
        cy.get(headerElements.PageTitle).should('contain', 'conduit')
    })*/ 
    it('logged in user', () => {
        cy.loginAPI()
        cy.visit('')
       // cy.get(headerElements.LinkforNeedAnAccount).should('be.visible')
        //cy.get(headerElements.LinkforNeedAnAccount).should('contain','Need an account')
        cy.get(headerElements.loggedInUSerName).should('be.visible').and('contain', 'Divya123')
        cy.get(headerElements.PageTitle).should('contain', 'conduit')
        cy.get(headerElements.settingsLink).should('be.visible')
        cy.get(headerElements.SignInBtn).should('not.be.visible')
        cy.get(headerElements.SignOutBtn).should('not.be.visible')
        cy.get(headerElements.Homelink).should('be.visible')
        cy.get(headerElements.NewArticleLink).should('be.visible')
        //cy.get(headerElements.YourFeed).should('be.visible').should('contain','Your Feed')
        //cy.get(headerElements.GlobalFeed).should('be.visible').should('contain','Global Feed')

       // cy.get(loginElements.settingsLink).click()
        //cy.get(loginElements.EditProfileSettingsLink).click()
        //cy.get(loginElements.SettingsPageTitle).should('contain', 'Your Settings')
        //cy.get(loginElements.EditName).type('DivyaBasavaraju')
        //cy.get(loginElements.UpdateSettingsPageBtn).click()
    }) 

})