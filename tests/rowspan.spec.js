const ariaset = require('../dist/ariaset');
const arianame = 'rowspan';

describe(`get/set aria-${arianame}`, () => {
  const testNode = document.createElement('div');
  const invalidValues = [undefined, true, false, 'string', -1];
  const validValues = [0, 1];

  test('set', () => {
    invalidValues.forEach(value => {
      expect(() => {
        ariaset(testNode, { [arianame]: value });
      }).toThrow();
    });
  });

  test('get', () => {
    validValues.forEach(value => {
      ariaset(testNode, { [arianame]: value });
      expect(ariaset(testNode, arianame)).toEqual(value);
    });
  });
});
