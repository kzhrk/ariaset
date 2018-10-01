const config = require('../config');

module.exports = value => {
  if (!/horizontal|vertical/.test(value) && typeof value !== 'undefined') {
    throw new Error(config.messages.invalidValue);
  }
};
