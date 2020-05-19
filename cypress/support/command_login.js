import loginElements from "../objects/login.obj"
import headerElements from "../objects/header.obj"

Cypress.Commands.add("loginUI", (email,password) =>{
    cy.visit('/login')
    cy.get(loginElements.emailFeild).type('divya@testing.com')
    cy.get(loginElements.passFeild).type('legendsubramanya1987')
    cy.get(loginElements.submitButton).click()

})