describe('App ', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Kuvagalleria')
  })

  it('pictures page can be opened', function() {
    cy.contains('pictures').click()
    cy.url().should('include', '/pictures')
    cy.contains('Kuvat')
  })

  it('albums page can be opened', function() {
    cy.contains('albums').click()
    cy.url().should('include', '/albums')
    cy.contains('Albumit')
  })

  it('categories page can be opened', function() {
    cy.contains('categories').click()
    cy.url().should('include', '/categories')
    cy.contains('Kategoriat')
  })
})