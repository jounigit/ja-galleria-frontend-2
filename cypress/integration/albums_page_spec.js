/* eslint-disable jest/no-focused-tests */
describe('The Albums Page', function() {
  const username = 'testi'
  const email = 'testi@mail.com'
  const password = 'testippass'

  beforeEach(function() {
    cy.resetDatabase()
    cy.signUp({ username, email, password })
    cy.login({ email, password })
    cy.createAlbum({ title: 'Album 1' })
    cy.createAlbum({ title: 'Album 2' })
    cy.visit('/albums')
  })

  it('get all albums', function() {
    cy.get('h1').should('contain', 'ALBUMS')
    cy.get('[data-cy=albumListItem]').its('length').should('eq', 2)
  })

  it('can open first album', function() {
    cy.get('[data-cy=albumListItem] a').first().click()
    cy.get('[data-cy=album]').its('length').should('eq', 1)
  })

})

