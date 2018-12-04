const config = require('../config');
const util = require('../util');
const arianame = 'pressed';
const roleRegexp = /button/;

module.exports = (value, element) => {
  if (
    !util.isBoolean(value) &&
    typeof value !== 'undefined' &&
    value !== 'mixed'
  ) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  } else if (!roleRegexp.test(element.getAttribute('role'))) {
    throw {
      type: config.throwType.warn,
      message: config.messages.invalidRole(arianame)
    };
  }
};
