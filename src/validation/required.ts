import * as config from '../config';
import * as util from '../util';
const arianame: string = 'required';
const roleRegexp: any = /combobox|gridcell|listbox|radiogroup|spinbutton|textbox|tree/;

export default function(value: any, element: HTMLElement) {
  if (!util.isBoolean(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  } else if (!roleRegexp.test(element.getAttribute('role'))) {
    throw {
      type: config.throwType.warn,
      message: config.messages.invalidRole(arianame)
    };
  }
};
