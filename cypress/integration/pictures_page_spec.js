describe('The Pictures Page', function() {
  beforeEach(function() {
    cy.server()
    cy.route('pictures', 'fixture:pictures').as('getPictures')
    cy.visit('/pictures')
    cy.wait('@getPictures')
  })

  // Pictures length 5 x 3, look galleries folder
  it('get all pictures', function() {
    cy.get('h1').should('contain', 'PICTURES')
    cy.get('[data-cy=pictureListItem]').its('length').should('eq', 15)
  })

})
