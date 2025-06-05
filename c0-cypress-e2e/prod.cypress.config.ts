import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200",
    defaultCommandTimeout: 2000,
    video: true,
    screenshotOnRunFailure: false,

    // specPattern: "cypress/e2e/1-*/**/*",
  },
});
