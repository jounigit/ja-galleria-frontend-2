/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/no-focused-tests */

describe('Signup page',  function() {
  const email = 'signup@email.com'
  const password = 'signuppass'
  const username = 'signup'

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
      cy.get('[data-cy=error-message]').should('contain', 'password is required!')
    })

    context('User signup', function () {
      before(function () {
        cy.visit('/signup')
      })

      // after(function() {
      //   cy.deleteUser(email, password)
      // })

      it('user can signup', function() {
        cy.get('input[name=username]').type(username)
        cy.get('[data-cy=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('form').submit()
        cy.get('[data-cy=message]').should('be.visible')
        cy.get('[data-cy=message]').should('contain', 'User signed up successfully')
      })

      it('user can be deleted', function() {
        cy.deleteUser(email, password)
        cy.loginByForm(email, password)
        cy.get('[data-cy=logout]').should('contain', username)
      })

    })

  })
})