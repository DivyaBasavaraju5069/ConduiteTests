Cypress.Commands.add("loginAPI", (email = Cypress.env('email'), password = Cypress.env('password')) => {
    cy.request({
        url: 'https://conduit.productionready.io/api/users/login',
        method: 'POST',
        body: {
            user: {
                email: email, 
                password: password
            }
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        window.localStorage.setItem('jwtToken', response.body.user.token)
    })
})