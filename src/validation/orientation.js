const config = require('../config');
const arianame = 'orientation';
const roleRegexp = /scrollbar|select|separator|slider|tablist|toolbar/;

module.exports = (value, element) => {
  if (!/horizontal|vertical/.test(value) && typeof value !== 'undefined') {
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
