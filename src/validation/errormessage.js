const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isId(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
