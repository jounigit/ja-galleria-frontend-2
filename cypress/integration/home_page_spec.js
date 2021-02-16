/* eslint-disable jest/no-focused-tests */
describe('The Home Page', function() {

  context('open home page', function() {
    beforeEach(function() {
      cy.visit('/')
      cy.get('[data-cy=menu] > .container > .item').as('menuLinks')
      cy.get('[data-cy=userActsBtn]').as('userActsBtn')
      cy.get('[data-cy=siteLinks]').as('siteLinks')
    })

    it('can see menu links', function() {
      // cy.get('@menuLinks').its('length').should('eq', 4)
      cy.get('@menuLinks').should('contain', 'HOME')
      cy.get('@menuLinks').should('contain', 'GALLERIA')
      cy.get('@menuLinks').should('contain', 'Site links')
      cy.get('@userActsBtn').should('contain', 'user actions')
    })

    it('can see user actions links', function() {
      cy.get('@userActsBtn').trigger('mouseover')
      cy.get('[data-cy=loginLink]').should('be.visible')
      cy.get('[data-cy=signupLink]').should('be.visible')
    })

    it('can see site links', function() {
      cy.get('@siteLinks').trigger('mouseover')
      cy.get('[data-cy=categoriesLink]').should('be.visible')
      cy.get('[data-cy=albumsLink]').should('be.visible')
      cy.get('[data-cy=picturesLink]').should('be.visible')
    })
  })

})