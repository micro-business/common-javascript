// @flow

import { Range } from 'immutable';

export default class ImmutableEx {
  splitIntoChunks = (list, chunkSize) => Range(0, list.count(), chunkSize).map(chunkStart => list.slice(chunkStart, chunkStart + chunkSize));
}
