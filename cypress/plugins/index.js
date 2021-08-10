/// <reference types="cypress" />
// Cypress Image Snapshot
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')


module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)

  on('task', {
    log(message) {
      console.log(message)

      return null
    },
  })
}
