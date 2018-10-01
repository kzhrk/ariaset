const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isBoolean(value) && typeof value !== 'undefined') {
    throw new Error(config.messages.invalidValue);
  }
};
