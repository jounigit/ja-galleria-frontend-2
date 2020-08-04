
Cypress.Commands.add('loginByForm', (email, password) => {
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
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
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
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
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

Cypress.Commands.add('signUpByCommand', (name, email, password) => {
  const url = Cypress.env('serverUrl')+'/register'

  cy.request({
    method: 'POST',
    url,
    failOnStatusCode: false,
    form: true,
    body: {
      name,
      email,
      password,
    },
  })
    .then((response) => {
      cy.log('=Cy SignUpByCommand ==', response)
    })
})

Cypress.Commands.add('deleteUser', () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const url = Cypress.env('serverUrl')+'/users/'+user.id
  cy.log('=Cy url ==', url)

  cy.request({
    method: 'DELETE',
    url,
    failOnStatusCode: false,
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
    .then((response) => {
      let body = response.body
      cy.log('=Cy delete ==', body)
    })

})
