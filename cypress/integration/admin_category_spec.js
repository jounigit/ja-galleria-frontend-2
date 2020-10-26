/* eslint-disable jest/no-focused-tests */
describe('Admin category', function() {
  const username = 'testi'
  const email = 'testi@mail.com'
  const password = 'testippass'
  let title = 'Category test'
  let content = 'Test content.'

  beforeEach(function () {
    cy.resetDatabase()
    cy.signUp({ username, email, password })
    cy.login({ email, password })
    cy.createCategory({ title: 'Category 1' })
    cy.visit('/')
    cy.get('[data-cy=adminLink]').click()
    cy.get('[href="/admin/categories"]').click()
  })

  describe('logged in user', () => {
    it('can see form', function() {
      cy.get('.CategoryList button:first').as('createButton')
      cy.get('@createButton').should('contain', 'new category')
      cy.get('@createButton').click()
      cy.get('[data-cy=title]').should('be.visible')
      cy.get('[data-cy=content]').should('be.visible')
    })

    it('can see update button', function() {
      cy.get('[data-cy=category] .edit').should('be.visible')
    })

    it('can see delete button', function() {
      cy.get('[data-cy=delete]').should('be.visible')
    })
  })

  describe('admin create', () => {
    it('can add new category', function() {
      cy.get('[data-cy=addNewCategory]').click()
      cy.get('[data-cy=title]').type(title)
      cy.get('[data-cy=content]').type(content)
      cy.get('form').submit()
      cy.get('[data-cy=category]').should('contain', title)
    })
  })

  describe('admin update', () => {
    it('can update album', function() {
      const newType = 'Updated'
      cy.get('[data-cy=category] .edit').first().click()
      cy.get('[type="title"]').clear()
      cy.get('[data-cy=title]').type(newType)
      cy.get('form').submit()
      cy.get('[data-cy=category]').should('contain', newType)
    })
  })

  describe('admin delete', () => {
    it('can delete album', function() {
      cy.get('[data-cy=delete]').first().click()
      cy.get('[data-cy=category]').should('not.exist')
    })
  })

})
