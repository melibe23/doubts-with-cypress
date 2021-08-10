export const browser = Cypress.browser.name
export const domain = Cypress.config().baseUrl

const obj = {
  iphonexr: {
    viewportHeight: 896,
    viewportWidth: 414,
  },
  iPad2: {
    viewportHeight: 1024,
    viewportWidth: 768,
  },
}

export const viewportsObj = Object.values(obj)
export const viewportsNames = Object.keys(obj)

export const userAgents = [
  'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
]

