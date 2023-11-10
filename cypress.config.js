const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  screenshotOnRunFailure: true,

  // e2e: {
  //   setupNodeEvents(on, config) {
  //     require('cypress-mochawesome-reporter/plugin')(on);
  //   },
  // },
  reporterOptions: {
    reportDir: "cypress/Report",
    charts: true,
    reportPageTitle: "Cypress Automation Testing",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
