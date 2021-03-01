import 'cypress-file-upload'

Cypress.Commands.add('resetDatabase', () => {
  // reset database url
  const url = Cypress.env('serverUrl')+'/testing/reset'
  cy.request('POST', url)
})

Cypress.Commands.add('login', ({ email, password }) => {
  const url = Cypress.env('serverUrl')+'/login'

  cy.request('POST', url, { email, password })
    .then((response) => {
      window.localStorage.setItem('user', JSON.stringify(response.body.user))
      window.localStorage.setItem('id', JSON.stringify(response.body.id))
      window.localStorage.setItem('token', JSON.stringify(response.body.token))
    })
})

Cypress.Commands.add('signUp', ({ username, email, password }) => {
  const url = Cypress.env('serverUrl')+'/users'

  const user = {
    username,
    email,
    password
  }

  cy.request('POST', url, user)
    .then((response) => {
      cy.log('Cy Signup:', response.body)
      response.body
    })
})

Cypress.Commands.add('createCategory', ({ title, content }) => {
  const url = Cypress.env('serverUrl')+'/categories'
  cy.request({
    url: url,
    method: 'POST',
    body: { title,content },
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
})

Cypress.Commands.add('createAlbum', ({ title, content }) => {
  const url = Cypress.env('serverUrl')+'/albums'

  cy.request({
    url: url,
    method: 'POST',
    body: { title,content },
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
})

Cypress.Commands.add('deleteAlbum', (id) => {
  const url = Cypress.env('serverUrl')+'/albums/'+id

  cy.request({
    method: 'DELETE',
    url,
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
})

Cypress.Commands.add('deleteUser', () => {
  const id = JSON.parse(localStorage.getItem('id'))
  const url = Cypress.env('serverUrl')+'/users/'+id
  // cy.log('=Cy url ==', url)

  cy.request({
    method: 'DELETE',
    url,
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
    .then((response) => {
      response.body
      // cy.log('=Cy delete ==', body)
    })
})
