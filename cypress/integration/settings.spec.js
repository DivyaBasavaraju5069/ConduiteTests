import loginElements from "../objects/login.obj"
import headerElements from "../objects/header.obj"
import settingsElements from "../objects/settings.obj"

describe('Settings', () => {

    beforeEach(() => {
        cy.visit('')
    })

    it('update Bio under Settings Page', () => {
        
        cy.loginUI()
        cy.get(headerElements.settingsLink).click()
        cy.get(settingsElements.EditProfileSettingsLink).click()
        cy.get(settingsElements.SettingsPageTitle).should('contain', 'Your Settings')
        cy.get(settingsElements.UpdateBio).clear()
        cy.get(settingsElements.UpdateBio).type('Testing')
        cy.get(settingsElements.UpdateSettingsPageBtn).click()
        cy.get(settingsElements.UpdatedTextForBio).should('be.visible').and('contain','Testing')
     })
     it.only('Modifying email', () => {
        cy.registerAPI().then((email) => {
            cy.loginAPI(email)
        })
        cy.visit('/settings')
        //const username = 'nb' + Math.random().toString().slice(2, 10)
        const newemail = 'nb' + Math.random().toString().slice(2, 10) + '@test.com'
        cy.get(settingsElements.emailField).clear()
        cy.get(settingsElements.emailField).type(newemail)
        cy.get(settingsElements.UpdateSettingsPageBtn).click()
        cy.hash().should('contain', "#/@")
       // cy.get(settingsElements.editsettings).click()
       // cy.get(settingsElements.emailField).should('contain', newemail)
        cy.loginAPI(newemail)
        
        
    }) 

})