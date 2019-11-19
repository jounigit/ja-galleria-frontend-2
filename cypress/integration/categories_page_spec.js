describe('The Categories Page', function() {
  beforeEach(function() {
    cy.init()
    cy.route('categories', 'fixture:categories').as('getCategories')
    cy.visit('http://localhost:3000/categories')
  })

  it('get all categories', function() {
    cy.wait('@getCategories')

    cy.get('h2').should('contain', 'Kategoriat')
    cy.get('[data-cy=category]').its('length').should('eq', 2)

    cy.get('[data-cy=linkable]').first().click({ force: true })
  })
})
