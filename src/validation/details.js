const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (typeof value === 'string' || typeof value === 'number') {
    value = '' + value;
    if (!util.isId(value)) {
      throw {
        type: config.throwType.error,
        message: config.messages.invalidValue
      };
    }
  } else {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
