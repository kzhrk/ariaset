import * as config from '../config';
const arianame: string = 'valuetext';
const roleRegexp: any = /range|separator/;

export default function(value: any, element: HTMLElement) {
  if (typeof value !== 'string') {
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
