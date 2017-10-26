// @flow

import { isImmutable, Range } from 'immutable';

export default class ImmutableEx {
  static splitIntoChunks = (list, chunkSize) => Range(0, list.count(), chunkSize).map(chunkStart => list.slice(chunkStart, chunkStart + chunkSize));

  static removeUndefinedProps = (obj) => {
    if (typeof obj === 'undefined') {
      return obj;
    }

    return isImmutable(obj)
      ? obj.filter(val => typeof ImmutableEx.removeUndefinedProps(val) !== 'undefined').map(val => ImmutableEx.removeUndefinedProps(val))
      : obj;
  };

  static removeNullProps = (obj) => {
    if (obj === null) {
      return obj;
    }

    return isImmutable(obj) ? obj.filter(val => ImmutableEx.removeNullProps(val) !== null).map(val => ImmutableEx.removeNullProps(val)) : obj;
  };

  static removeNullAndUndefinedProps = (obj) => {
    if (typeof obj === 'undefined' || obj === null) {
      return obj;
    }

    return ImmutableEx.removeUndefinedProps(ImmutableEx.removeNullProps(obj));
  };
}
