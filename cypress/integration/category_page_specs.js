
describe('Categoria page', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000/categories')
  })
  it('categories contains album links', function() {
    cy.get('li a').first().then(($selected) => {
          debugger
        })
    // cy.get(':nth-child(3) > [style="color: blue; text-decoration: underline;"]')
    //   .then(($selected) => {
    //     debugger
    //   })
    // cy.contains('show')
  })
})
