const config = require('../config');
const util = require('../util');
const arianame = 'rowindex';
const roleRegexp = /cell|row/;

module.exports = (value, element) => {
  if (!util.isNumberOfString(value) || value < 1) {
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
