const config = require('../config');
const util = require('../util');
const arianame = 'checked';
const roleRegexp = /checkbox|option|radio|switch/;

module.exports = (value, element) => {
  if (
    !util.isBoolean(value) &&
    !/mixed/.test(value) &&
    typeof value !== 'undefined'
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
