const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isBoolean(value)) {
    throw new Error(config.messages.valueIsBoolean);
  }
};
