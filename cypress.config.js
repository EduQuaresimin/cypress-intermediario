const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    viewportHeight: 768,
    viewportWidth: 1366,
  },
  fixturesFolder: false,
  video: false,
})
