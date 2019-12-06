
Cypress.Commands.add('loginByForm', (email, password) => {
  Cypress.log({
    name: 'loginByForm',
    message: `${email} | ${password}`,
  })

  return cy.request({
    method: 'POST',
    url: '/login',
    form: true,
    body: {
      email,
      password,
    },
  })
}
)