const config = require('../config');

module.exports = value => {
  if (!/inline|list|both|none/.test(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
