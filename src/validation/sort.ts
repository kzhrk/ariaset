import * as config from '../config';
const arianame: string = 'sort';
const roleRegexp: any = /columnheader|rowheader/;

export default function(value: any, element: HTMLElement) {
  if (!/ascending|descending|none|other/.test(value)) {
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
