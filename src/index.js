const config = require('./config');
const util = require('./util');

function ariaset(element, params) {
  let names = null;
  let values = null;

  if (!(element instanceof HTMLElement)) {
    throw new Error(config.messages.invalidArguments);
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
    throw new Error(config.messages.invalidArguments);
  }

  names.forEach(name => {
    if (!config.arias.includes(name)) {
      throw new Error();
    }
  });

  // get
  if (values === null) {
    let ret = names.map(name => {
      let val = element.getAttribute(`aria-${name}`);

      if (val === 'true') {
        val = true;
      } else if (val === 'false') {
        val = false;
      } else if (val === 'undefined') {
        val = undefined;
      } else if (util.isNumber(val)) {
        val = parseInt(val, 10);
      }

      return val;
    });

    return ret.length === 1 ? ret[0] : ret;

    // set
  } else {
    names.forEach((name, nameIndex) => {
      switch (name) {
        case 'activedescendant': {
          if (!util.isId(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'atomic': {
          if (!util.isBoolean(values[nameIndex])) {
            throw new Error(config.messages.valueIsBoolean);
          }
          break;
        }
        case 'autocomplete': {
          if (!/inline|list|both|none/.test(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'busy': {
          if (!util.isBoolean(values[nameIndex])) {
            throw new Error(config.messages.valueIsBoolean);
          }
          break;
        }
        case 'checked': {
          if (
            !util.isBoolean(values[nameIndex]) &&
            !/mixed/.test(values[nameIndex]) &&
            typeof values[nameIndex] !== 'undefined'
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'colcount': {
          if (!util.isNumber(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'colindex': {
          if (!util.isNumber(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          } else if (values[nameIndex] < 1) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'colspan': {
          if (!util.isNumber(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          } else if (values[nameIndex] < 1) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'controls': {
          if (
            typeof values[nameIndex] === 'string' ||
            typeof values[nameIndex] === 'number'
          ) {
            values[nameIndex] = '' + values[nameIndex];
            values[nameIndex]
              .replace(/\s+/g, ' ')
              .split(' ')
              .forEach(val => {
                if (!util.isId(val)) {
                  throw new Error(config.messages.invalidValue);
                }
              });
          } else {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'current': {
          if (
            !util.isBoolean(values[nameIndex]) &&
            !/page|step|location|date|time/.test(values[nameIndex])
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'describedby': {
          if (
            typeof values[nameIndex] === 'string' ||
            typeof values[nameIndex] === 'number'
          ) {
            values[nameIndex] = '' + values[nameIndex];
            values[nameIndex]
              .replace(/\s+/g, ' ')
              .split(' ')
              .forEach(val => {
                if (!util.isId(val)) {
                  throw new Error(config.messages.invalidValue);
                }
              });
          } else {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'details': {
          if (
            typeof values[nameIndex] === 'string' ||
            typeof values[nameIndex] === 'number'
          ) {
            values[nameIndex] = '' + values[nameIndex];
            if (!util.isId(values[nameIndex])) {
              throw new Error(config.messages.invalidValue);
            }
          } else {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'disabled': {
          if (!util.isBoolean(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'dropeffect': {
          if (!/copy|execute|link|move|none|popup/.test(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'errormessage': {
          if (!util.isId(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'expanded': {
          if (
            !util.isBoolean(values[nameIndex]) &&
            typeof values[nameIndex] !== 'undefined'
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'flowto': {
          if (
            typeof values[nameIndex] === 'string' ||
            typeof values[nameIndex] === 'number'
          ) {
            values[nameIndex] = '' + values[nameIndex];
            values[nameIndex]
              .replace(/\s+/g, ' ')
              .split(' ')
              .forEach(val => {
                if (!util.isId(val)) {
                  throw new Error(config.messages.invalidValue);
                }
              });
          } else {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'grabbed': {
          if (
            !util.isBoolean(values[nameIndex]) &&
            typeof values[nameIndex] !== 'undefined'
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'haspopup': {
          if (
            !util.isBoolean(values[nameIndex]) &&
            !/menu|listbox|tree|grid|dialog/.test(values[nameIndex])
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'hidden': {
          if (
            !util.isBoolean(values[nameIndex]) &&
            typeof values[nameIndex] !== 'undefined'
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'invalid': {
          if (
            !util.isBoolean(values[nameIndex]) &&
            !/grammar|spelling/.test(values[nameIndex])
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'keyshortcuts': {
          if (typeof values[nameIndex] !== 'string') {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'label': {
          if (typeof values[nameIndex] !== 'string') {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'labelledby': {
          if (
            typeof values[nameIndex] === 'string' ||
            typeof values[nameIndex] === 'number'
          ) {
            values[nameIndex] = '' + values[nameIndex];
            values[nameIndex]
              .replace(/\s+/g, ' ')
              .split(' ')
              .forEach(val => {
                if (!util.isId(val)) {
                  throw new Error(config.messages.invalidValue);
                }
              });
          } else {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'level': {
          if (typeof values[nameIndex] !== 'number') {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'live': {
          if (!/assertive|off|polite/.test(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'modal': {
          if (!util.isBoolean(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'multiline': {
          if (!util.isBoolean(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'multiselectable': {
          if (!util.isBoolean(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'orientation': {
          if (
            !/horizontal|vertical/.test(values[nameIndex]) &&
            typeof values[nameIndex] !== 'undefined'
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'owns': {
          if (
            typeof values[nameIndex] === 'string' ||
            typeof values[nameIndex] === 'number'
          ) {
            values[nameIndex] = '' + values[nameIndex];
            values[nameIndex]
              .replace(/\s+/g, ' ')
              .split(' ')
              .forEach(val => {
                if (!util.isId(val)) {
                  throw new Error(config.messages.invalidValue);
                }
              });
          } else {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'placeholder': {
          if (
            typeof values[nameIndex] !== 'string' &&
            typeof values[nameIndex] !== 'number'
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'posinset': {
          if (!util.isNumber(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          } else if (values[nameIndex] < 1) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'pressed': {
          if (
            !util.isBoolean(values[nameIndex]) &&
            typeof values[nameIndex] !== 'undefined' &&
            values[nameIndex] !== 'mixed'
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'readonly': {
          if (!util.isBoolean(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'relevant': {
          if (
            !/additions|additions text|all|removals|text/.test(
              values[nameIndex]
            )
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'required': {
          if (!util.isBoolean(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'roledescription': {
          if (typeof values[nameIndex] !== 'string') {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'rowcount': {
          if (!util.isNumber(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'rowindex': {
          if (!util.isNumber(values[nameIndex]) || values[nameIndex] < 1) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'rowspan': {
          if (!util.isNumber(values[nameIndex]) || values[nameIndex] < 0) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'selected': {
          if (
            !util.isBoolean(values[nameIndex]) &&
            typeof values[nameIndex] !== 'undefined'
          ) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'setsize': {
          if (!util.isNumber(values[nameIndex]) || values[nameIndex] < -1) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'sort': {
          if (!/ascending|descending|none|other/.test(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'valuemax': {
          if (!util.isNumber(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'valuemin': {
          if (!util.isNumber(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'valuenow': {
          if (!util.isNumber(values[nameIndex])) {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
        case 'valuetext': {
          if (typeof values[nameIndex] !== 'string') {
            throw new Error(config.messages.invalidValue);
          }
          break;
        }
      }

      element.setAttribute(`aria-${name}`, values[nameIndex]);
    });
  }
}

module.exports = ariaset;
