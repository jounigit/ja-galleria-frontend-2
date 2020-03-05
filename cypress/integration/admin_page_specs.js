describe('The Admin Page', function() {
  const email = Cypress.env('email')
  const password = Cypress.env('password')
  const username = Cypress.env('username')

  context('logged in user', function() {
    before(() => {
      cy.loginByForm(email, password)
      cy.visit('/admin')
    })

    it('can see logged in user', function() {
      cy.get('[data-cy=logout]').should('contain', 'Logout - ' + username)
    })

  })
})