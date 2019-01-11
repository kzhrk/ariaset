import * as config from '../config';
import * as util from '../util';

const arianame: string = 'checked';
const roleRegexp: any = /checkbox|option|radio|switch/;

export default function(value: any, element: HTMLElement) {
  if (
    !util.isBoolean(value) &&
    !/mixed/.test(value) &&
    typeof value !== 'undefined'
  ) {
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
}
