import * as config from '../config';

export default function(value: any) {
  if (!/copy|execute|link|move|none|popup/.test(value)) {
    throw {
      type: config.throwType.error,
      message: config.messages.invalidValue
    };
  }
}
