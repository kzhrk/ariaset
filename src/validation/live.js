const config = require('../config');

module.exports = value => {
  if (!/assertive|off|polite/.test(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
