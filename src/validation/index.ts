import activedescendant from './activedescendant';
import atomic from './atomic';
import autocomplete from './autocomplete';
import busy from './busy';
import checked from './checked';
import colcount from './colcount';
import colindex from './colindex';
import colspan from './colspan';
import controls from './controls';
import current from './current';
import describedby from './describedby';
import details from './details';
import disabled from './disabled';
import dropeffect from './dropeffect';
import errormessage from './errormessage';
import expanded from './expanded';
import flowto from './flowto';
import grabbed from './grabbed';
import haspopup from './haspopup';
import hidden from './hidden';
import invalid from './invalid';
import keyshortcuts from './keyshortcuts';
import label from './label';
import labelledby from './labelledby';
import level from './level';
import live from './live';
import modal from './modal';
import multiline from './multiline';
import multiselectable from './multiselectable';
import orientation from './orientation';
import owns from './owns';
import placeholder from './placeholder';
import posinset from './posinset';
import pressed from './pressed';
import readonly from './readonly';
import relevant from './relevant';
import required from './required';
import roledescription from './roledescription';
import rowcount from './rowcount';
import rowindex from './rowindex';
import rowspan from './rowspan';
import selected from './selected';
import setsize from './setsize';
import sort from './sort';
import valuemax from './valuemax';
import valuemin from './valuemin';
import valuenow from './valuenow';
import valuetext from './valuetext';

const createValidation = (handlers: any) => {
  return function validation(type: string, value: any, element: HTMLElement) {
    if (handlers.hasOwnProperty(type)) {
      return handlers[type](value, element);
    } else {
      return Error();
    }
  };
};

export default createValidation({
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
