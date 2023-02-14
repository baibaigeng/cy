/* eslint-disable no-console */
const { defineConfig } = require('cypress')

// load the environment variables from the local .env file

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = defineConfig({
  e2e: {
    // specPattern:"cypress/projects/**/e2e/*.cy.{js,jsx,ts,tsx}",
    // supportFolder:"cypress/support/e2e.js",
    // fixturesFolder:"cypress/projects/gwm/fixtures/prod",
    reporter: 'mochawesome',
    reporterOptions: {
      files:["cypress/mochawesome-report/*.json"],
      overwrite: false,
      html: false,
      json: true
    },
    numTestsKeptInMemory: 25,
    viewportWidth:1366,
    viewportHeight: 768,
    video: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config){
      const fs = require("fs-extra");
      const path = require("path");

      function getConfigurationByFile(environment, site) {
      const configPath = `cypress/projects/${site}/config`;
      // 定义完整路径，一定要注意
      const pathToConfigFile = path.resolve(".", configPath, `${environment}.json`);

      return fs.readJson(pathToConfigFile);
      };
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-dev-shm-usage");
          launchOptions.args.push("--js-flags=--expose-gc");
          return launchOptions;
        }
      });

        const environment = config.env.environment || "prod";
        const site = config.env.site || "monitor";
        return getConfigurationByFile(environment, site);
    },
  },
});
