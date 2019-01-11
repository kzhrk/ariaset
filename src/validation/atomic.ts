import * as config from '../config';
import * as util from '../util';

export default function(value: any) {
  if (!util.isBoolean(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
}