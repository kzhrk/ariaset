const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isBoolean(value) && typeof value !== 'undefined') {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
