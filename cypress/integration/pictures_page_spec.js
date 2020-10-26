describe('The Pictures Page', function() {
  // beforeEach(function() {
  //   cy.init()
  // })

  it('get all pictures', function() {
    cy.server()
    cy.route('pictures', 'fixture:pictures').as('getPictures')
    cy.visit('http://localhost:3000/pictures')
    cy.wait('@getPictures')

    cy.get('h2').should('contain', 'Kuvat')
    cy.get('[data-cy=picture]').its('length').should('eq', 15)
  })

})
