'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function Common() {
  _classCallCheck(this, Common);
};

Common.isUndefined = function (value) {
  return typeof value === 'undefined';
};

Common.isNotUndefined = function (value) {
  return !Common.isUndefined(value);
};

Common.isNull = function (value) {
  return value === null;
};

Common.isNotNull = function (value) {
  return !Common.isNull(value);
};

Common.isNullOrUndefined = function (value) {
  return Common.isUndefined(value) || Common.isNull(value);
};

Common.isNotNullAndUndefined = function (value) {
  return Common.isNotUndefined(value) && Common.isNotNull(value);
};

Common.isDecimal = function (strValue) {
  return !isNaN(parseFloat(strValue)) && isFinite(strValue);
};

exports.default = Common;