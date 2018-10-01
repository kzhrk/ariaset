const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isBoolean(value) && !/page|step|location|date|time/.test(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
