const ariaset = require('../dist/ariaset');
const arianame = 'multiselectable';

describe(`get/set aria-${arianame}`, () => {
  const testNode = document.createElement('div');
  const invalidValues = [undefined, 0, 'id-list'];
  const validValues = [true, false];

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
