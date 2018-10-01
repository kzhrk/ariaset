const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isBoolean(value) && !/grammar|spelling/.test(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
