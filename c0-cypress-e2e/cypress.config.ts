import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200",
    defaultCommandTimeout: 2000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      API_URL: "http://localhost:3000",
    },
  },
});
