import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  e2e: {
    baseUrl: "http://127.0.0.1:8000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  viewportWidth: 1440,
  viewportHeight: 900,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
