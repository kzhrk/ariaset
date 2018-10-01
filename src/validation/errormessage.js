const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isId(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
