/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/no-focused-tests */

describe('Login page',  function() {
  const email = Cypress.env('email')
  const password = Cypress.env('password')
  const username = Cypress.env('username')

  before(function () {
    // cy.resetDatabase()
    cy.signUp({ username, email, password })
  })

  it('login form can be opened', function() {
    cy.visit('/')
    cy.get('[data-cy=userActsBtn]').trigger('mouseover')
    cy.get('[data-cy=loginLink]').click()
    cy.get('h2').should('contain', 'Kirjaudu sovellukseen')
  })

  describe('login fails', function() {
    beforeEach(function () {
      cy.visit('/login')
    })

    it('email is required', function() {
      cy.get('input[name=password]').type('password{enter}')
      cy.get('[data-cy=error-message]').should('be.visible')
      cy.get('[data-cy=error-message]').should('contain', 'email is required!')
    })

    it('password is required', function() {
      cy.get('[data-cy=email]').type(email)
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('be.visible')
      cy.get('[data-cy=error-message]').should('contain', 'password is required!')
    })

    it('incorrect email or password', function() {
      cy.get('[data-cy=email]').type(email)
      cy.get('[data-cy=password]').type('eikay')
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('be.visible')
      cy.get('[data-cy=error-message]').should('contain', 'incorrect email or password!')
    })

  })

  describe('can login', () => {
    it('user can login', function() {
      cy.visit('/login')
      cy.get('[data-cy=email]').type(email)
      cy.get('[data-cy=password]').type(password)
      cy.get('form').submit()
      // cy.visit('/')
      // cy.get('[data-cy=userActsBtn]').trigger('mouseover')
      // cy.get('[data-cy=logoutLink]').should('contain', 'Logout')
      cy.get('[data-cy=message]').should('be.visible')
      // cy.get('[data-cy=message]').should('contain', 'Login successfully!')
    })
  })

  describe('can logout', function () {
    it('username is visible', function() {
      cy.login({ email, password })
      cy.visit('/')
      cy.get('[data-cy=userActsBtn]').trigger('mouseover')
      cy.get('[data-cy=logoutLink]').should('contain', 'Logout')
    })

    it('user can logout', function() {
      cy.login({ email, password })
      cy.visit('/')
      cy.get('[data-cy=userActsBtn]').trigger('mouseover')
      cy.get('[data-cy=logoutLink]').click()
      cy.get('[data-cy=message]').should('contain', 'User logged out.')
      cy.get('[data-cy=message]').should('be.visible')
      cy.get('[data-cy=userActsBtn]').trigger('mouseover')
      cy.get('[data-cy=loginLink]').should('be.visible')

    })
  })

})
