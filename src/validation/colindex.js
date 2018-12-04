const config = require('../config');
const util = require('../util');
const arianame = 'colindex';
const roleRegexp = /cell|row/;

module.exports = (value, element) => {
  if (!util.isNumberOfString(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  } else if (value < 1) {
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
