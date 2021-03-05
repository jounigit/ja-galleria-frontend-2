/* eslint-disable jest/no-focused-tests */

describe('Admin picture', function() {
  const username = 'testi'
  const email = 'testi@mail.com'
  const password = 'testippass'
  // let title = 'Test picture'



  beforeEach(function () {
    cy.resetDatabase()
    cy.signUp({ username, email, password })
    cy.login({ email, password })
    cy.visit('/')
    cy.get('[data-cy=userActsBtn]').trigger('mouseover')
    cy.get('[data-cy=adminLink]').click()
    cy.get('[href="/admin/pictures"]').click()
  })

  describe('upload picture', () => {
    beforeEach(function () {
      cy.get('[data-cy=newPicture]').click()
    })

    it('should upload image', function() {
      const filePath = 'testikuva.jpg'
      cy.get('input[type=file]').attachFile(filePath)

      cy.get('#file-submit').click()

      cy.get('h4').should('contain', 'Picture loaded and saved!')
      cy.get('h3').should('contain', 'Update picture info')
    })
  })

  describe('upload/save picture and update picture info', () => {
    beforeEach(function () {
      const filePath = 'testikuva.jpg'
      cy.get('[data-cy=newPicture]').click()
      cy.get('input[type=file]').attachFile(filePath)
      cy.get('#file-submit').click()
    })

    it('should update picture', function() {
      cy.get('h3').should('contain', 'Update picture info')
      cy.get('[data-cy=title]').should('be.visible')
      cy.get('[data-cy=content]').should('be.visible')
      cy.get('[type="title"]').clear()
      cy.get('[data-cy=title]').type('Kuva 1')
      cy.get('[data-cy=content]').type('Hieno kuva.')
      cy.get('[data-cy=submit]').click()
      cy.get('.header').contains('Kuva 1')
    })
  })

  describe('delete picture', () => {
    beforeEach(function () {
      const filePath = 'testikuva.jpg'
      cy.get('[data-cy=newPicture]').click()
      cy.get('input[type=file]').attachFile(filePath)
      cy.get('#file-submit').click()
    })

    it('should delete picture', function() {
      cy.get('h3').should('contain', 'Update picture info')
      cy.get('[data-cy=submit]').click()
      cy.get('h3').should('not.contain', 'no pictures yet!')
      cy.get('.trash').should('be.visible')
      cy.get('.trash').click()
      cy.get('h3').should('contain', 'no pictures yet!')
    })
  })

})