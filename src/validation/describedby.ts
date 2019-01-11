import * as config from '../config';
import * as util from '../util';

export default function(value: any) {
  if (typeof value === 'string' || typeof value === 'number') {
    value = '' + value;
    value
      .replace(/\s+/g, ' ')
      .split(' ')
      .forEach((val: any) => {
        if (!util.isId(val)) {
          throw {
            type: config.throwType.error,
            message: config.messages.invalidValue
          };
        }
      });
  } else {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
}
