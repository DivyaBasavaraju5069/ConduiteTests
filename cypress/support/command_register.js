Cypress.Commands.add("registerAPI", () => {
    const username = 'nb' + Math.random().toString().slice(2, 10)
    const email = username + '@test.com'
    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/users',
        body: {
             user: {
                 email: email,
                 username: username, 
                 password: 'password123'
                }
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        return email
    })
})