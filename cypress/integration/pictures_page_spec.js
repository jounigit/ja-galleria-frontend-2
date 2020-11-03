describe('The Pictures Page', function() {
  beforeEach(function() {
    cy.server()
    cy.route('pictures', 'fixture:pictures').as('getPictures')
    cy.visit('/pictures')
    cy.wait('@getPictures')
  })

  it('get all pictures', function() {
    cy.get('h2').should('contain', 'Kuvat')
    cy.get('[data-cy=picture]').its('length').should('eq', 15)
  })

})
