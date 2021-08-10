import { viewportsObj, userAgents, viewportsNames, browser } from '../support/default'

const path = `https://www.cypress.io/`

describe(`${browser}-hero-image`, () => {
  viewportsObj.forEach((viewport, i) => {
    context(`${viewportsNames[0]}`, viewport, () => {
      before(() => {
        cy.visit(path, {
          headers: {
            'user-agent': `${userAgents[0]}`,
          },
        })

      })

      it('Log-user-agent', () => {
        console.log(`UserAgent: ${navigator.userAgent}`)
        // logs: UserAgent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36
      })

    })
  })
})
