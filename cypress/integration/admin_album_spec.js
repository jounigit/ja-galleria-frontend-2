/* eslint-disable jest/no-focused-tests */
describe('Admin album', function() {
  const username = 'testi'
  const email = 'testi@mail.com'
  const password = 'testippass'
  let title = 'Test Album'

  beforeEach(function () {
    cy.resetDatabase()
    cy.signUp({ username, email, password })
    cy.login({ email, password })
    cy.createAlbum({ title: 'Album 1' })
    cy.visit('/')
    cy.get('[data-cy=adminLink]').click()
    cy.get('[href="/admin/albums"]').click()
  })

  describe('logged in user', () => {
    it('can see form', function () {
      cy.get('.AlbumList button:first').as('createButton')
      cy.get('@createButton').should('contain', 'new album')
      cy.get('@createButton').click()
      cy.get('[data-cy=title]').should('be.visible')
      cy.get('[data-cy=content]').should('be.visible')
      cy.get('label').should('contain', 'category')
    })

    it('can see delete button', function () {
      cy.createAlbum({ title: 'Album 1' })
      cy.get('[data-cy=delete]').should('be.visible')
    })

    it('can see update button', function () {
      cy.get('[data-cy=albumListItem] .edit').should('be.visible')
    })

    it('title is required', function () {
      cy.get('.AlbumList button:first').click()
      cy.get('textarea[name=content]').type('content')
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('be.visible')
      cy.get('[data-cy=error-message]').should('contain', 'title is required!')
    })
  })

  describe('admin create', () => {
    it('can add new album', function() {
      cy.get('[data-cy=addNewAlbum]').click()
      cy.get('[data-cy=title]').type(title)
      cy.get('[data-cy=content]').type('Sisusta tässä.')
      cy.get('form').submit()
      cy.get('[data-cy=albumListItem]').should('contain', title)
    })
  })

  describe('admin update', () => {
    it('can update album', function() {
      const newType = 'Updated'
      cy.get('[data-cy=albumListItem] .edit').first().click()
      cy.get('[type="title"]').clear()
      cy.get('[data-cy=title]').type(newType)
      cy.get('select').find('option').first()
      cy.get('form').submit()
      cy.get('[data-cy=albumListItem]').should('contain', newType)
    })
  })

  describe('admin delete', () => {
    it('can delete album', function() {
      cy.get('[data-cy=delete]').first().click()
      cy.get('[data-cy=albumListItem]').should('not.exist')
    })
  })

})







