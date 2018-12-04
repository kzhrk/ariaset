const config = require('../config');

module.exports = value => {
  if (!/additions|additions text|all|removals|text/.test(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
