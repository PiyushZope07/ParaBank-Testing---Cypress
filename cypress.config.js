const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout :10000,
  projectId: '2538r6',
  
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "reportFilename":"report",
    "charts": true,
    "overwrite": false,
    "html": true,
    "json": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },
  
});
