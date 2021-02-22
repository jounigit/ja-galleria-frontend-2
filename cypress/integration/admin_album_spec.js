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
    cy.createCategory({ title: 'Category 1' })
    cy.visit('/')
    cy.get('[data-cy=userActsBtn]').trigger('mouseover')
    cy.get('[data-cy=adminLink]').click()
    cy.get('[data-cy=albumsLink]').should('be.visible')
    cy.get('[data-cy=albumsLink]').click()
  })

  describe('logged in user', () => {
    it('can see form', function () {
      cy.get('.AlbumList button:first').as('createButton')
      cy.get('@createButton').should('contain', 'new album')
      cy.get('@createButton').click()
      cy.get('[data-cy=title]').should('be.visible')
      cy.get('.ql-editor').should('be.visible')
      cy.get('label').should('contain', 'content')
      cy.get('label').should('contain', 'category')
    })

    it('can see delete button', function () {
      cy.get('[data-cy=delete]').should('be.visible')
    })

    it('can see update button', function () {
      cy.get('[data-cy=albumListItem] .edit').should('be.visible')
    })

    it('title is required', function () {
      cy.get('.AlbumList button:first').click()
      cy.get('.ql-editor').type('content')
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('be.visible')
      cy.get('[data-cy=error-message]').should('contain', 'title is required!')
    })
  })

  describe('admin create', () => {
    it('can add new album', function() {
      cy.get('[data-cy=addNewAlbum]').click()
      cy.get('[data-cy=title]').type(title)
      cy.get('.ql-editor').type('Sisusta tässä.')
      cy.get('form').submit()
      cy.get('[data-cy=albumListItem]').should('contain', title)
    })
  })

  describe('admin update', () => {
    it('can update album', function() {
      const newType = 'Updated'
      cy.get('[data-cy=albumListItem] .edit').first().click()
      cy.get('[data-cy=album] .edit').should('be.visible')
      cy.get('[data-cy=album] .edit').first().click()
      cy.get('[type="title"]').clear()
      cy.get('[data-cy=title]').type(newType)
      cy.get('.ql-editor').type('Sisusta tässä.')
      cy.get('form').submit()
      cy.get('[data-cy=album]').should('contain', newType)
    })
  })

  describe('admin update select category', () => {
    it('can update album with category', function() {
      cy.get('[data-cy=albumListItem] .edit').first().click()
      cy.get('[data-cy=album] .edit').first().click()
      cy.get('#categoryId').select('Category 1')
      cy.get('form').submit()
      cy.get('[data-cy=album]').should('contain', 'Category 1')
    })
  })

  describe('admin delete', () => {
    it('can delete album', function() {
      cy.get('[data-cy=delete]').first().click()
      cy.get('[data-cy=albumListItem]').should('not.exist')
    })
  })

})







