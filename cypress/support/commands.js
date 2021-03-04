import 'cypress-file-upload'

const server = 'https://sleepy-mesa-77635.herokuapp.com/api'

Cypress.Commands.add('resetDatabase', () => {
  // reset database url
  const url = Cypress.env('serverUrl')+'/testing/reset'
  cy.request('POST', url)
})

Cypress.Commands.add('login', ({ email, password }) => {
  const url = server+'/login'
  cy.log('Cy server url:', url)

  cy.request('POST', url, { email, password })
    .then((response) => {
      cy.log('Cy login reponse body:', response.body)
      window.localStorage.setItem('user', JSON.stringify(response.body.user))
      window.localStorage.setItem('id', JSON.stringify(response.body.id))
      window.localStorage.setItem('token', JSON.stringify(response.body.token))
      cy.log('Cy login localstorage:', localStorage)
    })
})

Cypress.Commands.add('signUp', ({ username, email, password }) => {
  const url = server+'/users'

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
  const url = server+'/categories'
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
  const url = server+'/albums'

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
  const url = server+'/albums/'+id

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
  const url = server+'/users/'+id
  cy.log('Cy deleteUser localstorage:', localStorage)

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
