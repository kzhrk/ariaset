import * as config from '../config';

export default function(value: any) {
  if (typeof value !== 'number') {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};