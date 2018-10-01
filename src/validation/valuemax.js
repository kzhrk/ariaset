const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isNumber(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
