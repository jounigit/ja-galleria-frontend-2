/* eslint-disable no-undef */
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
    cy.get('[data-cy=userActsBtn]').trigger('mouseover')
    cy.get('[data-cy=signupLink]').click()
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
    it('user can resign', function() {
      cy.signUp({ username, email, password })
      cy.login({ email, password })
      cy.visit('/')
      cy.get('[data-cy=userActsBtn]').trigger('mouseover')
      cy.get('[data-cy=resignLink]').should('be.visible')
      cy.get('[data-cy=resignLink]').click()
      cy.on('window:confirm', () => true)
      cy.get('[data-cy=message]').should('contain', 'user resigned successfully')
    })
  })

  describe('Resign user login', function () {
    before(function () {
      cy.signUp({ username, email, password })
      cy.login({ email, password })
    })

    it('resigned can not login', function() {
      cy.visit('/')
      cy.log('Cy resign Spec localstorage:', localStorage)
      cy.get('[data-cy=userActsBtn]').trigger('mouseover')
      cy.get('[data-cy=resignLink]').click()
      cy.visit('/login')
      cy.get('[data-cy=email]').type(email)
      cy.get('[data-cy=password]').type(password)
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('contain', 'incorrect email or password!')
    })
  })

  describe('User signup and resign by command', function () {
    before(function () {
      cy.signUp({ username, email, password })
      cy.login({ email, password })
    })

    it('user can see admin page and logout links', function() {
      cy.log('Cy resign Spec localstorage:', localStorage)
      cy.visit('/')
      cy.get('[data-cy=userActsBtn]').trigger('mouseover')
      cy.get('[data-cy=logoutLink]').should('be.visible')
      cy.get('[data-cy=adminLink]').should('contain', 'ADMIN PAGE')
      cy.get('[data-cy=adminLink]').click()
      cy.get('[data-cy=menu] > .container > .item').should('contain', 'Public page')
    })

  })


})
