const config = require('../config');

module.exports = value => {
  if (typeof value !== 'string') {
    throw new Error(config.messages.invalidValue);
  }
};
