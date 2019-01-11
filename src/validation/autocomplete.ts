import * as config from '../config';

const arianame: string = 'autocomplete';
const roleRegexp: any = /combobox|textbox/;

export default function(value: any, element: HTMLElement) {
  if (!/inline|list|both|none/.test(value)) {
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
