export const arias: Array<string> = [
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

export const messages = {
  valueIsBoolean: 'value must be boolean',
  invalidValue: 'invalid values',
  invalidArguments: 'error',
  invalidRole: (arianame: string) => {
    return `The element set a aria-${arianame} has invalid role.`;
  }
};

export const throwType = {
  error: 'error',
  warn: 'warn'
};
