import ariaset from '../../src';
import * as config from '../../src/config';

module.exports = ({
  arianame,
  invalidValues,
  validValues,
  validRoles,
  invalidRoles
}) => {
  describe(`get/set aria-${arianame}`, () => {
    const testNode = document.createElement('div');

    beforeEach(() => {
      [`aria-${arianame}`, 'role'].forEach(prop => {
        testNode.removeAttribute(prop);
      });
    });

    if (invalidValues instanceof Array) {
      test('set invalid value', () => {
        invalidValues.forEach(value => {
          expect(() => {
            ariaset(testNode, { [arianame]: value });
          }).toThrow(config.messages.invalidValue);
        });
      });
    }

    if (validValues instanceof Array) {
      test('set valid value, throw warn', () => {
        validValues.forEach(value => {
          try {
            ariaset(testNode, { [arianame]: value });
          } catch (e) {
            expect(e.type).toBe(config.throwType.warn);
          }
        });
      });
    }

    if (invalidRoles instanceof Array) {
      test('set valid value, throw warn, invalid role', () => {
        invalidRoles.forEach(role => {
          testNode.setAttribute('role', role);

          expect(() => {
            validValues.forEach(value => {
              ariaset(testNode, { [arianame]: value });
            });
          }).toThrowError({
            type: config.throwType.warn,
            message: config.messages.invalidRole(arianame)
          });
        });
      });
    }

    test('set valid value', () => {
      if (validRoles instanceof Array) {
        validRoles.forEach(role => {
          testNode.setAttribute('role', role);

          validValues.forEach(value => {
            expect(() => {
              ariaset(testNode, { [arianame]: value });
            }).not.toThrow();
          });
        });
      } else {
        validValues.forEach(value => {
          expect(() => {
            ariaset(testNode, { [arianame]: value });
          }).not.toThrow();
        });
      }
    });

    test('get', () => {
      if (validRoles instanceof Array) {
        validRoles.forEach(role => {
          testNode.setAttribute('role', role);

          validValues.forEach(value => {
            ariaset(testNode, { [arianame]: value });
            expect(ariaset(testNode, arianame)).toEqual(value);
          });
        });
      } else {
        validValues.forEach(value => {
          ariaset(testNode, { [arianame]: value });
          expect(ariaset(testNode, arianame)).toEqual(value);
        });
      }
    });
  });
};
