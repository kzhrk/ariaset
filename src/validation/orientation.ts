import * as config from '../config';
const arianame: string = 'orientation';
const roleRegexp: any = /scrollbar|select|separator|slider|tablist|toolbar/;

export default function(value: any, element: HTMLElement) {
  if (!/horizontal|vertical/.test(value) && typeof value !== 'undefined') {
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
