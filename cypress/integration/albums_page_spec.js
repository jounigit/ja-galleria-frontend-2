describe('The Albums Page', function() {
  // beforeEach(function() {
  //   cy.init()
  // })

  it('get all albums', function() {
    cy.server()
    cy.route('albums', 'fixture:albums').as('getAlbums')
    cy.visit('http://localhost:3000/albums')
    cy.wait('@getAlbums')
    cy.get('h2').should('contain', 'Albumit')
    cy.get('[data-cy=album]').its('length').should('eq', 3)
  })

  it('get one album', function() {
    cy.visit('http://localhost:3000/albums/1')

    cy.get('[data-cy=album]').its('length').should('eq', 1)
  })

  // it('get one album', function() {
  //   // cy.route('albums/:id', 'fixture:album').as('getAlbum')
  //   cy.route('albums/*', 'fixture:album').as('getAlbum')
  //   cy.visit('http://localhost:3000/albums/1')
  //   cy.wait('@getAlbum')
  //   cy.get('[data-cy=album]').its('length').should('eq', 1)
  // })
})
