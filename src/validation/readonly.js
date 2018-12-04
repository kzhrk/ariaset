const config = require('../config');
const util = require('../util');
const arianame = 'readonly';
const roleRegexp = /checkbox|combobox|grid|gridcell|listbox|radiogroup|slider|spinbutton|textbox/;

module.exports = (value, element) => {
  if (!util.isBoolean(value)) {
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
