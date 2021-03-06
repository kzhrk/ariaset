const config = require('../config');
const util = require('../util');

module.exports = value => {
  if (!util.isBoolean(value) && !/menu|listbox|tree|grid|dialog/.test(value)) {
    throw new Error(config.messages.invalidValue);
  }
};
