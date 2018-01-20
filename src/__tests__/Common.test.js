import { Common } from '../';

describe('isNullOrUndefined', () => {
  test('should return true if undefined provided', () => {
    expect(Common.isNullOrUndefined(undefined)).toBeTruthy();
  });

  test('should return true if null provided', () => {
    expect(Common.isNullOrUndefined(null)).toBeTruthy();
  });

  test('should return false if empty string provided', () => {
    expect(Common.isNullOrUndefined('')).toBeFalsy();
  });

  test('should return false if 0 provided', () => {
    expect(Common.isNullOrUndefined(0)).toBeFalsy();
  });
});
