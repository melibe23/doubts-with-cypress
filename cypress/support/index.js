require('./commands')
require('@cypress/skip-test/support')
before(() => {
  cy.task(`log`, `UserAgent: ${navigator.userAgent}`)
  // const browserInfo = JSON.stringify(Cypress.browser.name, null, '\t')
  cy.task(`log`, `Browser Name: ${Cypress.browser.name}`)
  cy.task(`log`, `Browser Version: ${Cypress.browser.version}`)
})