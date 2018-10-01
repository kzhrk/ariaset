const config = require('../config');

module.exports = value => {
  if (!/additions|additions text|all|removals|text/.test(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
