describe('The Admin Page', function() {
  const email = Cypress.env('email')
  const password = Cypress.env('password')
  const username = Cypress.env('username')

  context('logged in user', function() {
    beforeEach(() => {
      cy.visit('/')
      cy.loginByForm(email, password)
      cy.visit('/admin')
      cy.get('[data-cy=menu] > .container > .item').as('menuLinks')
    })

    it('can see logged in user', function() {
      cy.get('@menuLinks').should('contain', 'Logout - ' + username)
    })

  })
})