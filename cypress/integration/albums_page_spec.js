/* eslint-disable jest/no-focused-tests */
describe('The Albums Page', function() {

  context('open public pages with cy server', function() {
    beforeEach(function() {
      cy.server()
      cy.route('pictures', 'fixture:pictures').as('getPictures')
      cy.route('albums', 'fixture:albums').as('getAlbums')
      cy.visit('/albums')
      cy.wait('@getPictures')
      // cy.wait('@getAlbums')
    })

    it('get all albums', function() {
      cy.get('h2').should('contain', 'Albumit')
      cy.get('[data-cy=albumListItem]').its('length').should('eq', 3)
    })

    it('can see show link', function() {
      cy.get('[data-cy=albumListItem]').first().should('contain', 'show')
    })

    it('can open first album', function() {
      cy.get('[data-cy=albumListItemLink]').first().click()
      cy.get('[data-cy=album]').its('length').should('eq', 1)
    })

  })

})

