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

ImmutableEx.removeUndefinedProps = function (obj) {
  if (typeof obj === 'undefined') {
    return obj;
  }

  return (0, _immutable.isImmutable)(obj) ? obj.filter(function (val) {
    return typeof ImmutableEx.removeUndefinedProps(val) !== 'undefined';
  }).map(function (val) {
    return ImmutableEx.removeUndefinedProps(val);
  }) : obj;
};

ImmutableEx.removeNullProps = function (obj) {
  if (obj === null) {
    return obj;
  }

  return (0, _immutable.isImmutable)(obj) ? obj.filter(function (val) {
    return ImmutableEx.removeNullProps(val) !== null;
  }).map(function (val) {
    return ImmutableEx.removeNullProps(val);
  }) : obj;
};

ImmutableEx.removeNullAndUndefinedProps = function (obj) {
  if (typeof obj === 'undefined' || obj === null) {
    return obj;
  }

  return ImmutableEx.removeUndefinedProps(ImmutableEx.removeNullProps(obj));
};

exports.default = ImmutableEx;