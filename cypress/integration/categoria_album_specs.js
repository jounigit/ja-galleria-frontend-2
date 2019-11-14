
describe('Categoria and Album', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000/categories')
  })
  it('categories contains album links', function() {
    cy.get('li a').first()
      .click

    cy.contains('show')
  })
})
