const config = require('../config');
const util = require('../util');
const arianame = 'rowcount';
const roleRegexp = /table/;

module.exports = (value, element) => {
  if (!util.isNumberOfString(value)) {
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
