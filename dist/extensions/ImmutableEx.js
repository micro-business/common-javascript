'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImmutableEx = function ImmutableEx() {
  _classCallCheck(this, ImmutableEx);
};

ImmutableEx.splitIntoChunks = function (list, chunkSize) {
  return (0, _immutable.Range)(0, list.count(), chunkSize).map(function (chunkStart) {
    return list.slice(chunkStart, chunkStart + chunkSize);
  });
};

exports.default = ImmutableEx;