import { viewportsObj, userAgents, viewportsNames, browser } from '../support/default'

const path = `https://example.cypress.io/`

describe(`${browser}-hero-image`, () => {
  viewportsObj.slice(0,1).forEach((viewport, i) => {
    context(`${viewportsNames[0]}`, viewport, () => {
      before(() => {
        cy.visit(path, {
          headers: {
            'user-agent': `${userAgents[0]}`,
          },
        })

      })

      it('Log-user-agent', () => {
        console.log(`Expected UserAgent: ${userAgents[0]}`)
        console.log(`navigator.userAgent: ${navigator.userAgent}`)
        // logs: UserAgent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36
      })

    })
  })
})
