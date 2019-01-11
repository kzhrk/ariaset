import * as config from '../config';
import * as util from '../util';

export default function(value: any) {
  if (typeof value === 'string' || typeof value === 'number') {
    value = '' + value;
    if (!util.isId(value)) {
      throw {
        type: config.throwType.error,
        message: config.messages.invalidValue
      };
    }
  } else {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
}
