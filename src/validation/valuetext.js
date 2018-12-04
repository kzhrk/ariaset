const config = require('../config');
const arianame = 'valuetext';
const roleRegexp = /range|separator/;

module.exports = (value, element) => {
  if (typeof value !== 'string') {
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
