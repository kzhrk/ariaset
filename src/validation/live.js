const config = require('../config');

module.exports = value => {
  if (!/assertive|off|polite/.test(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
