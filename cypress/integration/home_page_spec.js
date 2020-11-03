/* eslint-disable jest/no-focused-tests */
describe('The Home Page', function() {

  context('open home page', function() {
    beforeEach(function() {
      cy.visit('/')
      cy.get('[data-cy=menu] > .container > .item').as('menuLinks')
    })

    it('can see menu links', function() {
      // cy.get('@menuLinks').its('length').should('eq', 4)
      cy.get('@menuLinks').should('contain', 'Home')
      cy.get('@menuLinks').should('contain', 'Categories')
      cy.get('@menuLinks').should('contain', 'Albums')
      cy.get('@menuLinks').should('contain', 'Pictures')
      cy.get('@menuLinks').should('contain', 'Log in')
      cy.get('@menuLinks').should('contain', 'Sign Up')
    })
  })

})