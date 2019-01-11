import * as config from '../config';

export default function(value: any) {
  if (!/additions|additions text|all|removals|text/.test(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
};
