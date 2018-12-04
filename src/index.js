const config = require('./config');
const util = require('./util');
const validation = require('./validation/index');

function generateValue(val) {
  if (val === 'true') {
    val = true;
  } else if (val === 'false') {
    val = false;
  } else if (val === 'undefined') {
    val = undefined;
  } else if (util.isNumberOfString(val)) {
    val = parseFloat(val);
  }

  return val;
}

function ariaset(element, params) {
  let names = null;
  let values = null;

  if (!(element instanceof HTMLElement)) {
    throw Error(config.messages.invalidArguments);
  } else if (params && /string|number|boolean/.test(typeof params)) {
    names = [params];
  } else if (params && params instanceof Array) {
    names = params;
  } else if (params && typeof params === 'object') {
    names = Object.keys(params);
    values = names.map(key => {
      return params[key];
    });
  } else {
    throw Error(config.messages.invalidArguments);
  }

  names.forEach(name => {
    if (!config.arias.includes(name)) {
      throw Error(config.messages.invalidArguments);
    }
  });

  // get
  if (values === null) {
    let ret;

    if (names.length === 1) {
      ret = generateValue(element.getAttribute(`aria-${names[0]}`));
    } else {
      ret = {};
      names.forEach(name => {
        ret[name] = generateValue(element.getAttribute(`aria-${name}`));
      });
    }

    return ret;

    // set
  } else {
    names.forEach((name, nameIndex) => {
      try {
        validation(name, values[nameIndex], element);
        element.setAttribute(`aria-${name}`, values[nameIndex]);
      } catch (e) {
        if (e.type === config.throwType.warn) {
          console.warn(e.message);
          element.setAttribute(`aria-${name}`, values[nameIndex]);
          throw e;
        } else if (e.type === config.throwType.error) {
          throw Error(e.message);
        } else {
          throw e;
        }
      }
    });
  }
}

module.exports = ariaset;
