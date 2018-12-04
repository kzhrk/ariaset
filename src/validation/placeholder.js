const config = require('../config');
const arianame = 'placeholder';
const roleRegexp = /textbox/;

module.exports = (value, element) => {
  if (typeof value !== 'string' && typeof value !== 'number') {
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
