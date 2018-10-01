const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isNumber(value) || value < 0) {
    throw new Error(config.messages.invalidValue);
  }
};
