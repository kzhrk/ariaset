const config = require('../config');

module.exports = value => {
  if (typeof value !== 'number') {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
