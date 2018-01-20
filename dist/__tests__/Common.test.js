'use strict';

var _ = require('../');

describe('isNullOrUndefined', function () {
  test('should return true if undefined provided', function () {
    expect(_.Common.isNullOrUndefined(undefined)).toBeTruthy();
  });

  test('should return true if null provided', function () {
    expect(_.Common.isNullOrUndefined(null)).toBeTruthy();
  });

  test('should return false if empty string provided', function () {
    expect(_.Common.isNullOrUndefined('')).toBeFalsy();
  });

  test('should return false if 0 provided', function () {
    expect(_.Common.isNullOrUndefined(0)).toBeFalsy();
  });
});