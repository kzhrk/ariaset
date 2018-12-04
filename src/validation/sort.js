const config = require('../config');
const arianame = 'sort';
const roleRegexp = /columnheader|rowheader/;

module.exports = (value, element) => {
  if (!/ascending|descending|none|other/.test(value)) {
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
