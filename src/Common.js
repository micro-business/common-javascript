// @flow

export default class Common {
  static isUndefined = value => typeof value === 'undefined';

  static isNullOrUndefined = value => Common.isUndefined(value) || value === null;
}
