const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // baseUrL:'https://naveenautomationlabs.com/opencart/index.php?route='
    },
  },
  // env:{
  //   URL_reg:'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
  //   URL:'https://naveenautomationlabs.com/opencart/index.php?route=common/home'
  // }
});
