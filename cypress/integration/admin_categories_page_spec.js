/* eslint-disable jest/no-focused-tests */
describe('The Categories Page', function() {
  const email = Cypress.env('email')
  const password = Cypress.env('password')
  // // const username = Cypress.env('username')
  let title = 'Category test'
  let content = 'Test content.'

  context('logged in user', function() {
    before(function() {
      cy.loginByForm(email, password)
      cy.visit('/admin/categories')
      cy.get('.CategoryList button:first').as('createButton')
    })

    it('can see form', function() {
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

  context('create category', function() {
    before(function() {
      cy.loginByForm(email, password)
      cy.visit('/admin/categories')
    })

    after(function() {
      cy.get('[data-cy=delete]').last().click()
      cy.visit('/admin/categories')
    })

    it('can add new category', function() {
      cy.get('[data-cy=addNewCategory]').click()
      cy.get('[data-cy=title]').type(title)
      cy.get('[data-cy=content]').type(content)
      cy.get('form').submit()
      cy.visit('/admin/categories')
      cy.get('[data-cy=category]').should('contain', title)
    })
  })

  context('update category', function() {
    before(function() {
      cy.loginByForm(email, password)
      cy.get('[data-cy=addNewCategory]').click()
      cy.get('[data-cy=title]').type(title)
      cy.get('[data-cy=content]').type(content)
      cy.get('form').submit()
      cy.visit('/admin/categories')
    })

    after(function() {
      cy.get('[data-cy=delete]').last().click()
    })

    it('can update category', function() {
      const newType = 'Updated'
      cy.get('[data-cy=category] .edit').last().click()
      cy.get('[type="title"]').clear()
      cy.get('[data-cy=title]').type(newType)
      cy.get('[data-cy=content]').type(content)
      cy.get('form').submit()
      cy.visit('/admin/categories')
      cy.get('[data-cy=header]').last().as('lastHeader')
      cy.get('@lastHeader').last().debug()
      cy.get('@lastHeader').last().should('contain', newType)
    })
  })

  context('create and delete category', function() {
    before(function() {
      let title = 'Last Category'
      cy.loginByForm(email, password)
      cy.createCategory(title, 'delete last category')
    })

    it('delete last created categories', function() {
      cy.get('[data-cy=delete]').last().click()
      cy.visit('/admin/categories')
      cy.get('[data-cy=category]').last().as('lastItem')
      cy.get('@lastItem').should('not.contain', title)
    })
  })

})
