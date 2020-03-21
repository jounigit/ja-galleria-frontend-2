
Cypress.Commands.add('loginByForm', (email, password) => {
  // Cypress.log({
  //   name: 'loginByForm',
  //   message: `${email} | ${password}`,
  // })
  const url = Cypress.env('serverUrl')+'/login'

  cy.request({
    method: 'POST',
    url,
    failOnStatusCode: false,
    form: true,
    body: {
      email,
      password,
    },
  })
    .then((response) => {
      window.localStorage.setItem('user', JSON.stringify(response.body.user))
      window.localStorage.setItem('token', JSON.stringify(response.body.token))
    })
})

Cypress.Commands.add('createCategory', ({ title, content }) => {
  const url = Cypress.env('serverUrl')+'/categories'
  cy.request({
    method: 'POST',
    url: url,
    failOnStatusCode: false,
    body: { title, content },
    headers: {
      'Authorization': `bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })

  cy.visit('/admin/categories')
})

Cypress.Commands.add('createAlbum', ({ title, content }) => {
  const url = Cypress.env('serverUrl')+'/albums'
  cy.request({
    method: 'POST',
    url: url,
    failOnStatusCode: false,
    body: { title, content },
    headers: {
      'Authorization': `bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })

  cy.visit('/admin/albums')
})

Cypress.Commands.add('createAlbumByForm', (title, content) => {
  const url = Cypress.env('serverUrl')+'/albums'

  cy.request({
    method: 'POST',
    url,
    failOnStatusCode: false,
    form: true,
    body: {
      title,
      content
    },
  })
    .then((response) => {
      response.data.data
    })
})

Cypress.Commands.add('deleteUser', (email, password) => {
  const url = Cypress.env('serverUrl')+'/login'

  cy.request({
    method: 'POST',
    url,
    body: {
      email,
      password,
    },
  })
    .then((response) => {
      let deleteId = response.body.user.id
      window.localStorage.setItem('user', JSON.stringify(response.body.user))
      window.localStorage.setItem('token', JSON.stringify(response.body.token))
      cy.log('Cy res --', deleteId)
      const deleteUrl = Cypress.env('serverUrl')+'/users/'+deleteId

      cy.request({
        method: 'DELETE',
        url: deleteUrl,
        failOnStatusCode: false,
        headers: {
          'Authorization': `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
        .then((response) => {
          let res = response.body
          cy.log('Cy delete --', res)
        })
    })

})
