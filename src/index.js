const ariaAttributes = [
  'activedescendant',
  'atomic',
  'autocomplete',
  'busy',
  'checked',
  'colcount',
  'colindex',
  'colspan',
  'controls',
  'current',
  'describedby',
  'details',
  'disabled',
  'dropeffect',
  'errormessage',
  'expanded',
  'flowto',
  'grabbed',
  'haspopup',
  'hidden',
  'invalid',
  'keyshortcuts',
  'label',
  'labelledby',
  'level',
  'live',
  'modal',
  'multiline',
  'multiselectable',
  'orientation',
  'owns',
  'placeholder',
  'posinset',
  'pressed',
  'readonly',
  'relevant',
  'required',
  'roledescription',
  'rowcount',
  'rowindex',
  'rowspan',
  'selected',
  'setsize',
  'sort',
  'valuemax',
  'valuemin',
  'valuenow',
  'valuetext'
];

const config = {
  message: {
    valueIsBoolean: 'value must be boolean',
    invalidValue: 'invalid values',
    invalidArguments: 'error'
  }
};

const isBoolean = val => {
  return typeof val === 'boolean' || val === 'true' || val === 'false';
};

const isId = val => {
  return (
    (typeof val === 'string' || typeof val === 'number') &&
    /[a-zA-Z0-9_.:-]+/g.test(val)
  );
};

const isNumber = val => {
  return /^-?[0-9]+$/.test(val);
};

function ariaset(element, ...params) {
  let name = null;
  let value = null;

  if (!(element instanceof HTMLElement)) {
    throw Error(config.message.invalidArguments);
  } else if (params.length === 1 && typeof params[0] === 'string') {
    name = params[0];
  } else if (params.length === 1 && typeof params[0] === 'object') {
    name = Object.keys(params[0])[0];
    value = params[0][name];
  } else {
    throw Error(config.message.invalidArguments);
  }

  if (!ariaAttributes.includes(name)) {
    throw new Error();
  }

  // get
  if (value === null) {
    let ret = element.getAttribute(`aria-${name}`);

    if (ret === 'true') {
      ret = true;
    } else if (ret === 'false') {
      ret = false;
    } else if (ret === 'undefined') {
      ret = undefined;
    } else if (isNumber(ret)) {
      ret = parseInt(ret, 10);
    }

    return ret;
    // set
  } else {
    switch (name) {
      case 'activedescendant': {
        if (!isId(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'atomic': {
        if (!isBoolean(value)) {
          throw new Error(config.message.valueIsBoolean);
        }
        break;
      }
      case 'autocomplete': {
        if (!/inline|list|both|none/.test(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'busy': {
        if (!isBoolean(value)) {
          throw new Error(config.message.valueIsBoolean);
        }
        break;
      }
      case 'checked': {
        if (
          !isBoolean(value) &&
          !/mixed/.test(value) &&
          typeof value !== 'undefined'
        ) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'colcount': {
        if (!isNumber(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'colindex': {
        if (!isNumber(value)) {
          throw new Error(config.message.invalidValue);
        } else if (value < 1) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'colspan': {
        if (!isNumber(value)) {
          throw new Error(config.message.invalidValue);
        } else if (value < 1) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'controls': {
        if (typeof value === 'string' || typeof value === 'number') {
          value = '' + value;
          value
            .replace(/\s+/g, ' ')
            .split(' ')
            .forEach(val => {
              if (!isId(val)) {
                throw new Error(config.message.invalidValue);
              }
            });
        } else {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'current': {
        if (!isBoolean(value) && !/page|step|location|date|time/.test(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'describedby': {
        if (typeof value === 'string' || typeof value === 'number') {
          value = '' + value;
          value
            .replace(/\s+/g, ' ')
            .split(' ')
            .forEach(val => {
              if (!isId(val)) {
                throw new Error(config.message.invalidValue);
              }
            });
        } else {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'details': {
        if (typeof value === 'string' || typeof value === 'number') {
          value = '' + value;
          if (!isId(value)) {
            throw new Error(config.message.invalidValue);
          }
        } else {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'disabled': {
        if (!isBoolean(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'dropeffect': {
        if (!/copy|execute|link|move|none|popup/.test(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'errormessage': {
        if (!isId(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'expanded': {
        if (!isBoolean(value) && typeof value !== 'undefined') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'flowto': {
        if (typeof value === 'string' || typeof value === 'number') {
          value = '' + value;
          value
            .replace(/\s+/g, ' ')
            .split(' ')
            .forEach(val => {
              if (!isId(val)) {
                throw new Error(config.message.invalidValue);
              }
            });
        } else {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'grabbed': {
        if (!isBoolean(value) && typeof value !== 'undefined') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'haspopup': {
        if (!isBoolean(value) && !/menu|listbox|tree|grid|dialog/.test(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'hidden': {
        if (!isBoolean(value) && typeof value !== 'undefined') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'invalid': {
        if (!isBoolean(value) && !/grammar|spelling/.test(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'keyshortcuts': {
        if (typeof value !== 'string') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'label': {
        if (typeof value !== 'string') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'labelledby': {
        if (typeof value === 'string' || typeof value === 'number') {
          value = '' + value;
          value
            .replace(/\s+/g, ' ')
            .split(' ')
            .forEach(val => {
              if (!isId(val)) {
                throw new Error(config.message.invalidValue);
              }
            });
        } else {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'level': {
        if (typeof value !== 'number') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'live': {
        if (!/assertive|off|polite/.test(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'modal': {
        if (!isBoolean(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'multiline': {
        if (!isBoolean(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'multiselectable': {
        if (!isBoolean(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'orientation': {
        if (
          !/horizontal|vertical/.test(value) &&
          typeof value !== 'undefined'
        ) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'owns': {
        if (typeof value === 'string' || typeof value === 'number') {
          value = '' + value;
          value
            .replace(/\s+/g, ' ')
            .split(' ')
            .forEach(val => {
              if (!isId(val)) {
                throw new Error(config.message.invalidValue);
              }
            });
        } else {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'placeholder': {
        if (typeof value !== 'string' && typeof value !== 'number') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'posinset': {
        if (!isNumber(value)) {
          throw new Error(config.message.invalidValue);
        } else if (value < 1) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'pressed': {
        if (
          !isBoolean(value) &&
          typeof value !== 'undefined' &&
          value !== 'mixed'
        ) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'readonly': {
        if (!isBoolean(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'relevant': {
        if (!/additions|additions text|all|removals|text/.test(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'required': {
        if (!isBoolean(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'roledescription': {
        if (typeof value !== 'string') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'rowcount': {
        if (!isNumber(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'rowindex': {
        if (!isNumber(value) || value < 1) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'rowspan': {
        if (!isNumber(value) || value < 0) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'selected': {
        if (!isBoolean(value) && typeof value !== 'undefined') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'setsize': {
        if (!isNumber(value) || value < -1) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'sort': {
        if (!/ascending|descending|none|other/.test(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'valuemax': {
        if (!isNumber(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'valuemin': {
        if (!isNumber(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'valuenow': {
        if (!isNumber(value)) {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
      case 'valuetext': {
        if (typeof value !== 'string') {
          throw new Error(config.message.invalidValue);
        }
        break;
      }
    }

    element.setAttribute(`aria-${name}`, value);
  }
}

module.exports = ariaset;
