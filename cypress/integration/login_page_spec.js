/* eslint-disable jest/valid-expect-in-promise */
describe('Login page',  function() {
  const email = 'testia@t.net'
  const password = 'password'
  const username = 'testia'

  // beforeEach(function() {
  //   cy.visit('http://localhost:3000')
  // })

  it('login form can be opened', function() {
    cy.visit('/')
    cy.get('[data-cy=login]').click()
    cy.get('h2').should('contain', 'Kirjaudu sovellukseen')
  })
  // ..

  context('HTML form submission', function() {
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
      cy.get('[data-cy=password]').type('qwe')
      cy.get('form').submit()
      cy.get('[data-cy=error-message]').should('be.visible')
      cy.get('[data-cy=error-message]').should('contain', 'incorrect email or password!')
    })

    it('user can login', function() {
      cy.get('[data-cy=email]').type(email)
      cy.get('[data-cy=password]').type(password)
      cy.get('form').submit()
      cy.get('[data-cy=logout]').should('be.visible')
    })
  })

  // context('Reusable "login" custom command', function () {
  //   beforeEach(function () {
  //     // login before each test
  //     cy.loginByForm(email, password)
  //   })

  //   it.only('username is visible', function() {
  //     cy.visit('/')
  //     cy.get('[data-cy=logout]').should('contain', username)
  //   })
  // })

})

// "name": "testia",
//         "email": "testia@t.net"
// password: password