
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
}
)
