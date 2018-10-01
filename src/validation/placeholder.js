const config = require('../config');

module.exports = value => {
  if (typeof value !== 'string' && typeof value !== 'number') {
    throw new Error(config.messages.invalidValue);
  }
};
