// @flow

import Immutable, { Set } from 'immutable';

export default class StringHelper {
  convertStringArgumentToSet = (text, convertToLowerCase = true) => {
    if (text) {
      const trimmedText = text.trim();

      if (trimmedText.length === 0) {
        return Set();
      }

      return Immutable.fromJS((convertToLowerCase ? trimmedText.toLowerCase() : trimmedText).split(' '))
        .map(_ => _.trim())
        .filter(_ => _.length > 0)
        .toSet();
    }

    return Set();
  };
}
