import * as config from '../config';

export default function(value: any) {
  if (!/assertive|off|polite/.test(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
