const config = require('../config');
const util = require('../util');
const arianame = 'selected';
const roleRegexp = /gridcell|option|row|tab/;

module.exports = (value, element) => {
  if (!util.isBoolean(value) && typeof value !== 'undefined') {
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
