/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/no-focused-tests */

describe('Signup page',  function() {
  const email = 'signup@email.com'
  const password = 'signuppass'
  const username = 'signup'

  beforeEach(function () {
    cy.resetDatabase()
  })

  it('signup form can be opened', function() {
    cy.visit('/')
    cy.get('[data-cy=signup]').click()
    cy.get('h2').should('contain', 'Sign up')
  })

  describe('User signup', function () {
    it('user can signup', function() {
      cy.visit('/signup')
      cy.get('input[name=username]').type(username)
      cy.get('[data-cy=email]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()
      cy.get('[data-cy=message]').should('contain', 'User signed up successfully')
    })
  })

  describe('User resign', function () {
    before(function () {
      cy.signUp({ username, email, password })
      cy.login({ email, password })
    })

    it('user can resign', function() {
      cy.visit('/login')
      cy.get('[data-cy=resign]').should('be.visible')
      cy.get('[data-cy=resign]').click()
      cy.on('window:confirm', () => true)
      cy.get('[data-cy=message]').should('contain', 'user resigned successfully')
      cy.get('[data-cy=login]').should('be.visible')
    })
  })

  describe('Resign user login', function () {
    before(function () {
      cy.signUp({ username, email, password })
      cy.login({ email, password })
    })

    it('resigned can not login', function() {
      cy.visit('/')
      cy.get('[data-cy=resign]').click()
      cy.visit('/login')
      cy.get('[data-cy=email]').type(email)
      cy.get('[data-cy=password]').type(password)
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('contain', 'incorrect email or password!')
    })
  })

  describe('User signup and resign by command', function () {
    beforeEach(function () {
      cy.signUp({ username, email, password })
      cy.login({ email, password })
      cy.visit('/')
    })

    it('user can see logout', function() {
      cy.get('[data-cy=logout]').should('contain', username)
    })

    it('admin page link is visible', function() {
      cy.get('[data-cy=adminLink]').should('contain', 'Admin page')
    })

    it('user can go to admin page', function() {
      cy.get('[data-cy=adminLink]').click()
      cy.get('[data-cy=usersLink]').should('contain', 'Users')
    })

    it('user exists in users page', function() {
      cy.get('[data-cy=adminLink]').click()
      cy.get('[data-cy=usersLink]').click()
      cy.get('[data-cy=user]').should('contain', username)
    })
  })


})
