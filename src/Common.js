// @flow

export default class Common {
  static isUndefined = value => typeof value === 'undefined';

  static isNull = value => value === null;

  static isNullOrUndefined = value => Common.isUndefined(value) || Common.isNull(value);
}
