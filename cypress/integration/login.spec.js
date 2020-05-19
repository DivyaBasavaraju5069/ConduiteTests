import loginElements from "../objects/login.obj"
describe('Login', () => {

    beforeEach(() => {
        cy.visit('/login')
    })
    it('with email and password', () => {
        
        //cy.get('[ui-sref="app.login"]').click()
        cy.get(loginElements.emailFeild).type('divya@testing.com')
        cy.get(loginElements.passFeild).type('legendsubramanya1987')
        cy.get(loginElements.submitButton).click()
        cy.get(loginElements.errorMessage).should('be.visible')
    }) 

    it('displays correct error message for incorrect credentials', ()=>{
       
        //cy.get('[ui-sref="app.login"]').click()
        cy.get(loginElements.emailFeild).type('divya@testing.com')
        cy.get(loginElements.passFeild).type('legendsubramanya')
        cy.get(loginElements.submitButton).click()
        cy.get(loginElements.errorMessageInvalid).should('contain', 'email or password is invalid')


    })

    it('displays correct error message for empty credentials', ()=>{
        
       // cy.get('[ui-sref="app.login"]').click()
       cy.get(loginElements.emailFeild).type('divya@testing.com')
       cy.get(loginElements.passFeild).type('legendsubramanya')
       cy.get(loginElements.submitButton).click()
        cy.get(loginElements.errorMessageEmpty).should('contain', 'email or password is invalid')


    })
})