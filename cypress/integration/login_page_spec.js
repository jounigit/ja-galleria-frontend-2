/* eslint-disable jest/valid-expect-in-promise */
describe('Login page',  function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('login form can be opened', function() {
    cy.get('[data-cy=login]').click()
    cy.get('h2').should('contain', 'Kirjaudu sovellukseen')
  })
  // ..
  it('user can login', function() {
    cy.visit('login')
    cy.get('[data-cy=email]').then(($el) => {
      Cypress.dom.isDocument($el) // false
    })
    cy.get('[data-cy=email]').type('testia@t.net')
    cy.get('[data-cy=password]').type('testia')
    // cy.get('#username')
    //   .type('mluukkai')
    // cy.get('#password')
    //   .type('salainen')
    // cy.contains('login')
    //   .click()
    // cy.contains('Matti Luukkainen logged in')
  })
})

// "name": "testia",
//         "email": "testia@t.net"