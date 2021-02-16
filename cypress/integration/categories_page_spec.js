/* eslint-disable jest/no-focused-tests */
describe('The Categories Page', function() {

  context('open public pages', function() {
    before(function() {
      cy.server()
      cy.route('categories', 'fixture:categories').as('getCategories')
      cy.visit('/categories')
      cy.wait('@getCategories')
    })

    it('get all categories', function() {
      cy.get('h1').should('contain', 'CATEGORIES')
      cy.get('[data-cy=categoryListItem]').its('length').should('eq', 2)
    })

    it('can open first category', function() {
      cy.get('[data-cy=categoryListItemLink]').first().click()
      cy.get('[data-cy=category]').its('length').should('eq', 1)
    })

  })

})
