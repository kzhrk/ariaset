const ariaset = require('../../src');
const config = require('../../src/config');

describe(`get/set multiple properties`, () => {
  const testNode = document.createElement('div');

  test('set invalid value', () => {
    beforeEach(() => {
      ['aria-checked', 'aria-label', 'role'].forEach(prop => {
        testNode.removeAttribute(prop);
      });
    });

    expect(() => {
      ariaset(testNode, {
        checked: 'string',
        label: 'string'
      });
    }).toThrow(config.messages.invalidValue);
  });

  test('set valid value, throw warn', () => {
    try {
      ariaset(testNode, {
        checked: true,
        label: 'string'
      });
    } catch (e) {
      expect(e.type).toBe(config.throwType.warn);
    }
  });

  test('set valid value, throw warn, invalid role', () => {
    testNode.setAttribute('role', 'invalid');

    try {
      ariaset(testNode, {
        checked: true,
        label: 'string'
      });
    } catch (e) {
      expect(e.type).toBe(config.throwType.warn);
    }
  });

  test('set valid value', () => {
    testNode.setAttribute('role', 'checkbox');

    expect(() => {
      ariaset(testNode, {
        checked: true,
        label: 'string'
      });
    }).not.toThrow();
  });

  test('get', () => {
    testNode.setAttribute('role', 'checkbox');

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
