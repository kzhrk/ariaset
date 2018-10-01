const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isNumber(value)) {
    throw new Error(config.messages.invalidValue);
  } else if (value < 1) {
    throw new Error(config.messages.invalidValue);
  }
};
