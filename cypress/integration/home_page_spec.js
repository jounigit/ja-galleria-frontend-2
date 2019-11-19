describe('The Home Page', function() {
  beforeEach(function() {
    cy.init()
    cy.visit('/')
  })

  it('successfully loads home page', function() {
    cy.get('a').its('length').should('eq', 4)
    cy.get('a').should('contain', 'categories')
    cy.get('a').should('contain', 'albums')
    cy.get('a').should('contain', 'pictures')
  })


})