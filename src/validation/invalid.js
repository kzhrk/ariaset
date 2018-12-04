const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isBoolean(value) && !/grammar|spelling/.test(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
