const ariaset = require('../dist/ariaset');
const arianame = 'colindex';

describe(`get/set aria-${arianame}`, () => {
  const testNode = document.createElement('div');
  const invalidValues = [-1, 0, 'string', true, false, undefined];
  const validValues = [1, 2];

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
