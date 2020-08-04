/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/no-focused-tests */

describe('Signup page',  function() {
  const email = 'signup@email.com'
  const password = 'signuppass'
  const username = 'signup'
  const usernameCom = 'command'
  const emailCom = 'command@email.com'
  const passwordCom = 'commandppass'

  it('signup form can be opened', function() {
    cy.visit('/')
    cy.get('[data-cy=signup]').click()
    cy.get('h2').should('contain', 'Sign up')
  })

  context('form submission', function() {
    beforeEach(function() {
      cy.visit('/signup')
    })

    it('username is required', function() {
      cy.get('[data-cy=email]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('be.visible')
      cy.get('[data-cy=error-message]').should('contain', 'username is required!')
    })

    it('email is required', function() {
      cy.get('input[name=username]').type(username)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('be.visible')
      cy.get('[data-cy=error-message]').should('contain', 'email is required!')
    })

    it('password is required', function() {
      cy.get('input[name=username]').type(username)
      cy.get('[data-cy=email]').type(email)
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('be.visible')
      cy.get('[data-cy=error-message]').should('contain', 'password must be at least 6 characters!')
    })

    context('User signup and resign', function () {
      before(function () {
        cy.visit('/signup')
      })

      it('user can signup', function() {
        cy.get('input[name=username]').type(username)
        cy.get('[data-cy=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('form').submit()
        cy.get('h2').should('contain', 'Kirjaudu sovellukseen')
      })

      it('user can resign', function() {
        cy.loginByForm(email, password)
        cy.visit('/')
        cy.get('[data-cy=resign]').click()
        cy.get('[data-cy=login]').should('be.visible')
      })

      it('resigned can not login', function() {
        cy.visit('/login')
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=password]').type(password)
        cy.get('form').submit()
        cy.get('[data-cy=error-message]').should('contain', 'incorrect email or password!')
      })
    })

    context('User signup and resign by command', function () {
      beforeEach(function () {
        cy.signUpByCommand( usernameCom, emailCom, passwordCom )
        cy.loginByForm( emailCom, passwordCom )
        cy.visit('/')
      })

      afterEach(function() {
        cy.deleteUser()
      })

      it('user can see logout', function() {
        cy.get('[data-cy=logout]').should('contain', usernameCom)
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
        cy.get('[data-cy=user]').should('contain', usernameCom)
      })
    })

  })
})
