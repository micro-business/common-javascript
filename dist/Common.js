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

Common.isNullOrUndefined = function (value) {
  return Common.isUndefined(value) || value === null;
};

exports.default = Common;