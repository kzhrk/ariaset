const config = require('../config');

module.exports = value => {
  if (!/copy|execute|link|move|none|popup/.test(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
