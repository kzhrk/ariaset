const config = require('../config');

module.exports = value => {
  if (!/copy|execute|link|move|none|popup/.test(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
