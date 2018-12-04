const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (typeof value === 'string' || typeof value === 'number') {
    value = '' + value;
    value
      .replace(/\s+/g, ' ')
      .split(' ')
      .forEach(val => {
        if (!util.isId(val)) {
          throw {
            type: config.throwType.error,
            message: config.messages.invalidValue
          };
        }
      });
  } else {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
