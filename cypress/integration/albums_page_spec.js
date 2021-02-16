/* eslint-disable jest/no-focused-tests */
describe('The Albums Page', function() {

  context('open public pages with cy server', function() {
    beforeEach(function() {
      cy.server()
      cy.route('pictures', 'fixture:pictures').as('getPictures')
      cy.route('albums', 'fixture:albums').as('getAlbums')
      cy.visit('/albums')
      cy.wait('@getPictures')
    })

    it('get all albums', function() {
      cy.get('h1').should('contain', 'ALBUMS')
      cy.get('[data-cy=albumListItem]').its('length').should('eq', 3)
    })

    it('can open first album', function() {
      cy.get('[data-cy=albumListItemLink]').first().click()
      cy.get('[data-cy=album]').its('length').should('eq', 1)
    })

  })

})

