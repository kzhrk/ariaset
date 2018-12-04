const activedescendant = require('./activedescendant');
const atomic = require('./atomic');
const autocomplete = require('./autocomplete');
const busy = require('./busy');
const checked = require('./checked');
const colcount = require('./colcount');
const colindex = require('./colindex');
const colspan = require('./colspan');
const controls = require('./controls');
const current = require('./current');
const describedby = require('./describedby');
const details = require('./details');
const disabled = require('./disabled');
const dropeffect = require('./dropeffect');
const errormessage = require('./errormessage');
const expanded = require('./expanded');
const flowto = require('./flowto');
const grabbed = require('./grabbed');
const haspopup = require('./haspopup');
const hidden = require('./hidden');
const invalid = require('./invalid');
const keyshortcuts = require('./keyshortcuts');
const label = require('./label');
const labelledby = require('./labelledby');
const level = require('./level');
const live = require('./live');
const modal = require('./modal');
const multiline = require('./multiline');
const multiselectable = require('./multiselectable');
const orientation = require('./orientation');
const owns = require('./owns');
const placeholder = require('./placeholder');
const posinset = require('./posinset');
const pressed = require('./pressed');
const readonly = require('./readonly');
const relevant = require('./relevant');
const required = require('./required');
const roledescription = require('./roledescription');
const rowcount = require('./rowcount');
const rowindex = require('./rowindex');
const rowspan = require('./rowspan');
const selected = require('./selected');
const setsize = require('./setsize');
const sort = require('./sort');
const valuemax = require('./valuemax');
const valuemin = require('./valuemin');
const valuenow = require('./valuenow');
const valuetext = require('./valuetext');

const createValidation = handlers => {
  return function validation(type, value, element) {
    if (handlers.hasOwnProperty(type)) {
      return handlers[type](value, element);
    } else {
      return new Error();
    }
  };
};

module.exports = createValidation({
  activedescendant,
  atomic,
  autocomplete,
  busy,
  checked,
  colcount,
  colindex,
  colspan,
  controls,
  current,
  describedby,
  details,
  disabled,
  dropeffect,
  errormessage,
  expanded,
  flowto,
  grabbed,
  haspopup,
  hidden,
  invalid,
  keyshortcuts,
  label,
  labelledby,
  level,
  live,
  modal,
  multiline,
  multiselectable,
  orientation,
  owns,
  placeholder,
  posinset,
  pressed,
  readonly,
  relevant,
  required,
  roledescription,
  rowcount,
  rowindex,
  rowspan,
  selected,
  setsize,
  sort,
  valuemax,
  valuemin,
  valuenow,
  valuetext
});
