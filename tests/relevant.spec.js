const ariaset = require('../dist/ariaset');
const arianame = 'relevant';

describe(`get/set aria-${arianame}`, () => {
  const testNode = document.createElement('div');
  const invalidValues = [true, false, undefined, -1, 1];
  const validValues = [
    'additions',
    'additions text',
    'all',
    'removals',
    'text'
  ];

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
