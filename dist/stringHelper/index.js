'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringHelper = function StringHelper() {
  _classCallCheck(this, StringHelper);
};

StringHelper.convertStringArgumentToSet = function (text) {
  var convertToLowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (text) {
    var trimmedText = text.trim();

    if (trimmedText.length === 0) {
      return (0, _immutable.Set)();
    }

    return _immutable2.default.fromJS((convertToLowerCase ? trimmedText.toLowerCase() : trimmedText).split(' ')).map(function (_) {
      return _.trim();
    }).filter(function (_) {
      return _.length > 0;
    }).toSet();
  }

  return (0, _immutable.Set)();
};

exports.default = StringHelper;