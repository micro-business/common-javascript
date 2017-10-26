'use strict';

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('removeUndefinedProps', function () {
  test('should remove undefined objects in map', function () {
    var obj = { prop1: 'A', prop2: undefined };
    var clearedObj = { prop1: 'A' };

    expect(_.ImmutableEx.removeUndefinedProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove nested undefined objects in map - 1', function () {
    var obj = { prop1: 'A', prop2: { prop3: 'B', prop4: undefined } };
    var clearedObj = { prop1: 'A', prop2: { prop3: 'B' } };

    expect(_.ImmutableEx.removeUndefinedProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove nested undefined objects in map - 2', function () {
    var obj = { prop1: 'A', prop2: { prop3: 'B', prop4: { prop5: undefined, prop6: 'C' } } };
    var clearedObj = { prop1: 'A', prop2: { prop3: 'B', prop4: { prop6: 'C' } } };

    expect(_.ImmutableEx.removeUndefinedProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove undefined objects in list', function () {
    var obj = ['A', undefined];
    var clearedObj = ['A'];

    expect(_.ImmutableEx.removeUndefinedProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove undefined objects in nested list - 1', function () {
    var obj = ['A', ['A', ['A', ['A', undefined]]]];
    var clearedObj = ['A', ['A', ['A', ['A']]]];

    expect(_.ImmutableEx.removeUndefinedProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove undefined objects in nested list - 2', function () {
    var obj = ['A', ['A', ['A', [{ prop1: 'A', prop2: { prop3: 'B', prop4: { prop5: undefined, prop6: 'C' } } }, undefined]]]];
    var clearedObj = ['A', ['A', ['A', [{ prop1: 'A', prop2: { prop3: 'B', prop4: { prop6: 'C' } } }]]]];

    expect(_.ImmutableEx.removeUndefinedProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });
});

describe('removeNullProps', function () {
  test('should remove null objects in map', function () {
    var obj = { prop1: 'A', prop2: null };
    var clearedObj = { prop1: 'A' };

    expect(_.ImmutableEx.removeNullProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove nested null objects in map - 1', function () {
    var obj = { prop1: 'A', prop2: { prop3: 'B', prop4: null } };
    var clearedObj = { prop1: 'A', prop2: { prop3: 'B' } };

    expect(_.ImmutableEx.removeNullProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove nested null objects in map - 2', function () {
    var obj = { prop1: 'A', prop2: { prop3: 'B', prop4: { prop5: null, prop6: 'C' } } };
    var clearedObj = { prop1: 'A', prop2: { prop3: 'B', prop4: { prop6: 'C' } } };

    expect(_.ImmutableEx.removeNullProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove null objects in list', function () {
    var obj = ['A', null];
    var clearedObj = ['A'];

    expect(_.ImmutableEx.removeNullProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove null objects in nested list - 1', function () {
    var obj = ['A', ['A', ['A', ['A', null]]]];
    var clearedObj = ['A', ['A', ['A', ['A']]]];

    expect(_.ImmutableEx.removeNullProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove null objects in nested list - 2', function () {
    var obj = ['A', ['A', ['A', [{ prop1: 'A', prop2: { prop3: 'B', prop4: { prop5: null, prop6: 'C' } } }, null]]]];
    var clearedObj = ['A', ['A', ['A', [{ prop1: 'A', prop2: { prop3: 'B', prop4: { prop6: 'C' } } }]]]];

    expect(_.ImmutableEx.removeNullProps(_immutable2.default.fromJS(obj)).equals(_immutable2.default.fromJS(clearedObj))).toBeTruthy();
  });
});