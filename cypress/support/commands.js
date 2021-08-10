// Cypress Image Snapshot
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
  failureThreshold: 0.02, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.02 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
})

