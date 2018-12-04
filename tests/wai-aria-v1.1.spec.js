const testTemplate = require('./helpers/template');

testTemplate({
  arianame: 'activedescendant',
  validValues: ['id-test'],
  invalidValues: [true, false],
  validRoles: ['application'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'atomic',
  validValues: [true, false],
  invalidValues: ['string', -1]
});

testTemplate({
  arianame: 'autocomplete',
  validValues: ['inline', 'list', 'both', 'none'],
  invalidValues: ['string', -1, true],
  validRoles: ['combobox', 'textbox'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'busy',
  validValues: [true, false],
  invalidValues: ['string', -1]
});

testTemplate({
  arianame: 'checked',
  validValues: [true, false, 'mixed', undefined],
  invalidValues: ['string', -1],
  validRoles: ['checkbox', 'option', 'radio', 'switch'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'colcount',
  validValues: [-1, 0, 1],
  invalidValues: ['string', true, false, undefined],
  validRoles: ['table'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'colindex',
  validValues: [1, 2],
  invalidValues: [-1, 0, 'string', true, false, undefined],
  validRoles: ['cell', 'row'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'colspan',
  validValues: [1, 2],
  invalidValues: [-1, 0, 'string', true, false, undefined],
  validRoles: ['cell'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'controls',
  validValues: ['id-list', 'id-list id-list2'],
  invalidValues: [true, false, undefined]
});

testTemplate({
  arianame: 'current',
  validValues: ['page', 'location', 'date', 'time', true, false],
  invalidValues: [undefined, 0, 'id-list']
});

testTemplate({
  arianame: 'describedby',
  validValues: ['id-list', 'id-list id-list2'],
  invalidValues: [true, false, undefined]
});

testTemplate({
  arianame: 'details',
  validValues: ['id-list'],
  invalidValues: [true, false, undefined]
});

testTemplate({
  arianame: 'disabled',
  validValues: [true, false],
  invalidValues: [undefined, 0, 'id-list']
});

testTemplate({
  arianame: 'dropeffect',
  validValues: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
  invalidValues: [undefined, 0, 'id-list']
});

testTemplate({
  arianame: 'errormessage',
  validValues: ['id-list'],
  invalidValues: [true, false, undefined]
});

testTemplate({
  arianame: 'expanded',
  validValues: [true, false, undefined],
  invalidValues: [0, 'id-list'],
  validRoles: [
    'button',
    'combobox',
    'document',
    'link',
    'section',
    'sectionhead',
    'window'
  ],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'flowto',
  validValues: ['id-list', 'id-list id-list2'],
  invalidValues: [true, false, undefined]
});

testTemplate({
  arianame: 'grabbed',
  validValues: [true, false, undefined],
  invalidValues: [0, 'id-list']
});

testTemplate({
  arianame: 'haspopup',
  validValues: [false, true, 'menu', 'listbox', 'tree', 'grid', 'dialog'],
  invalidValues: [undefined, 0, 'id-list']
});

testTemplate({
  arianame: 'hidden',
  validValues: [true, false, undefined],
  invalidValues: [0, 'id-list']
});

testTemplate({
  arianame: 'invalid',
  validValues: ['grammar', false, 'spelling', true],
  invalidValues: [undefined, 0, 'id-list']
});

testTemplate({
  arianame: 'keyshortcuts',
  validValues: [
    'A',
    'Shift+Space'
    // '0' TODO: generato string to number
  ],
  invalidValues: [undefined, 0]
});

testTemplate({
  arianame: 'label',
  validValues: ['string'],
  invalidValues: [undefined, 0, true, false]
});

testTemplate({
  arianame: 'labelledby',
  validValues: ['id-list', 'id-list id-list2'],
  invalidValues: [true, false, undefined]
});

testTemplate({
  arianame: 'level',
  validValues: [-1, 0, 1],
  invalidValues: [true, false, undefined, 'id-list']
});

testTemplate({
  arianame: 'live',
  validValues: ['assertive', 'off', 'polite'],
  invalidValues: [true, false, undefined, 0, 'id-list']
});

testTemplate({
  arianame: 'modal',
  validValues: [true, false],
  invalidValues: [undefined, 0, 'id-list'],
  validRoles: ['window'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'multiline',
  validValues: [true, false],
  invalidValues: [undefined, 0, 'id-list'],
  validRoles: ['textbox'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'multiselectable',
  validValues: [true, false],
  invalidValues: [undefined, 0, 'id-list'],
  validRoles: ['grid', 'listbox', 'tablist', 'tree'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'orientation',
  validValues: ['horizontal', undefined, 'vertical'],
  invalidValues: [0, 'id-list'],
  validRoles: [
    'scrollbar',
    'select',
    'separator',
    'slider',
    'tablist',
    'toolbar'
  ],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'owns',
  validValues: ['id-list', 'id-list id-list2'],
  invalidValues: [true, false, undefined]
});

testTemplate({
  arianame: 'placeholder',
  validValues: ['string', '00-00', 100],
  invalidValues: [true, false, undefined],
  validRoles: ['textbox'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'posinset',
  validValues: [1],
  invalidValues: [true, false, undefined, -1],
  validRoles: ['article', 'listitem', 'menuitem', 'option', 'radio', 'tab'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'pressed',
  validValues: [false, 'mixed', true, undefined],
  invalidValues: [-1, 'string', 1],
  validRoles: ['button'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'readonly',
  validValues: [true, false],
  invalidValues: [undefined, 0, 'id-list'],
  validRoles: [
    'checkbox',
    'combobox',
    'grid',
    'gridcell',
    'listbox',
    'radiogroup',
    'slider',
    'spinbutton',
    'textbox'
  ],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'relevant',
  validValues: ['additions', 'additions text', 'all', 'removals', 'text'],
  invalidValues: [true, false, undefined, -1, 1]
});

testTemplate({
  arianame: 'required',
  validValues: [true, false],
  invalidValues: [undefined, -1, 1, 'string'],
  validRoles: [
    'combobox',
    'gridcell',
    'listbox',
    'radiogroup',
    'spinbutton',
    'textbox',
    'tree'
  ],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'roledescription',
  validValues: ['string'],
  invalidValues: [undefined, -1, 1, true, false]
});

testTemplate({
  arianame: 'rowcount',
  validValues: [-1, 0, 1],
  invalidValues: [undefined, true, false, 'string'],
  validRoles: ['table'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'rowindex',
  validValues: [1],
  invalidValues: [undefined, true, false, 'string', -1, 0],
  validRoles: ['cell', 'row'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'rowspan',
  validValues: [0, 1],
  invalidValues: [undefined, true, false, 'string', -1],
  validRoles: ['cell'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'selected',
  validValues: [true, false, undefined],
  invalidValues: ['string', 1, -1],
  validRoles: ['gridcell', 'option', 'row', 'tab'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'setsize',
  validValues: [-1, 0, 1],
  invalidValues: [undefined, true, false, 'string', -2],
  validRoles: ['article', 'listitem', 'menuitem', 'option', 'radio', 'tab'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'sort',
  validValues: ['ascending', 'descending', 'none', 'other'],
  invalidValues: [undefined, true, false, 'string', -1, 0, 1],
  validRoles: ['columnheader', 'rowheader'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'valuemax',
  validValues: [-1, 0, 1],
  invalidValues: [undefined, true, false, 'string'],
  validRoles: ['range', 'scrollbar', 'separator', 'slider', 'spinbutton'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'valuemin',
  validValues: [-1, 0, 1],
  invalidValues: [undefined, true, false, 'string'],
  validRoles: ['range', 'scrollbar', 'separator', 'slider', 'spinbutton'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'valuenow',
  validValues: [-1, 0, 1],
  invalidValues: [undefined, true, false, 'string'],
  validRoles: ['range', 'scrollbar', 'separator', 'slider', 'spinbutton'],
  invalidRoles: ['invalid']
});

testTemplate({
  arianame: 'valuetext',
  validValues: ['string'],
  invalidValues: [undefined, true, false, -1, 0, 1],
  validRoles: ['range', 'separator'],
  invalidRoles: ['invalid']
});
