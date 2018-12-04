const config = require('../config');
const arianame = 'autocomplete';
const roleRegexp = /combobox|textbox/;

module.exports = (value, element) => {
  if (!/inline|list|both|none/.test(value)) {
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
