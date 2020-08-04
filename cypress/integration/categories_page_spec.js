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
      cy.get('h2').should('contain', 'Kategoriat')
      cy.get('[data-cy=category]').its('length').should('eq', 2)
    })

    it('hidden content can be opened', function() {
      cy.get('[data-cy=linkable]').first().click({ force: true })
    })
  })

})
