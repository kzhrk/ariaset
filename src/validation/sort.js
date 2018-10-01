const config = require('../config');

module.exports = value => {
  if (!/ascending|descending|none|other/.test(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
