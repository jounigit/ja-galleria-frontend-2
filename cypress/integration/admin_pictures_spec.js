describe('Admin picture', function() {
  const username = 'testi'
  const email = 'testi@mail.com'
  const password = 'testippass'
  // let title = 'Test picture'

  beforeEach(function () {
    cy.resetDatabase()
    cy.signUp({ username, email, password })
    cy.login({ email, password })
    cy.createAlbum({ title: 'Album 1' })
    cy.visit('/')
    cy.get('[data-cy=adminLink]').click()
    cy.get('[href="/admin/albums"]').click()
  })

  it('get all pictures', function() {
    cy.server()
    cy.route('pictures', 'fixture:pictures').as('getPictures')
    cy.visit('http://localhost:3000/pictures')
    cy.wait('@getPictures')

    cy.get('h2').should('contain', 'Kuvat')
    cy.get('[data-cy=picture]').its('length').should('eq', 15)
  })

  // it('get one picture', function() {
  //   // cy.server()
  //   // cy.route('pictures/*', 'fixture:picture').as('getPicture')
  //   cy.visit('http://localhost:3000/pictures/1')
  //   // cy.wait('@getPicture')

  //   cy.get('[data-cy=picture]').its('length').should('eq', 1)
  // })
})
