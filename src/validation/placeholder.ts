import * as config from '../config';
const arianame: string = 'placeholder';
const roleRegexp: any = /textbox/;

export default function(value: any, element: HTMLElement) {
  if (typeof value !== 'string' && typeof value !== 'number') {
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
