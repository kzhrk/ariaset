const ariaset = require('../../dist/ariaset');

describe(`get/set multiple properties`, () => {
  const testNode = document.createElement('div');

  test('set', () => {
    expect(() => {
      ariaset(testNode, {
        checked: 'string',
        label: 'string'
      });
    }).toThrow();
  });

  test('get', () => {
    ariaset(testNode, {
      checked: true,
      label: 'string'
    });
    expect(ariaset(testNode, 'checked')).toEqual(true);
    expect(ariaset(testNode, 'label')).toEqual('string');
    expect(ariaset(testNode, ['checked', 'label'])).toEqual({
      checked: true,
      label: 'string'
    });
  });
});
