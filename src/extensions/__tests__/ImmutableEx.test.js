// @flow

import Immutable from 'immutable';
import { ImmutableEx } from '../';

describe('removeUndefinedProps', () => {
  test('should remove undefined objects in map', () => {
    const obj = { prop1: 'A', prop2: undefined };
    const clearedObj = { prop1: 'A' };

    expect(ImmutableEx.removeUndefinedProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove nested undefined objects in map - 1', () => {
    const obj = { prop1: 'A', prop2: { prop3: 'B', prop4: undefined } };
    const clearedObj = { prop1: 'A', prop2: { prop3: 'B' } };

    expect(ImmutableEx.removeUndefinedProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove nested undefined objects in map - 2', () => {
    const obj = { prop1: 'A', prop2: { prop3: 'B', prop4: { prop5: undefined, prop6: 'C' } } };
    const clearedObj = { prop1: 'A', prop2: { prop3: 'B', prop4: { prop6: 'C' } } };

    expect(ImmutableEx.removeUndefinedProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove undefined objects in list', () => {
    const obj = ['A', undefined];
    const clearedObj = ['A'];

    expect(ImmutableEx.removeUndefinedProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove undefined objects in nested list - 1', () => {
    const obj = ['A', ['A', ['A', ['A', undefined]]]];
    const clearedObj = ['A', ['A', ['A', ['A']]]];

    expect(ImmutableEx.removeUndefinedProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove undefined objects in nested list - 2', () => {
    const obj = ['A', ['A', ['A', [{ prop1: 'A', prop2: { prop3: 'B', prop4: { prop5: undefined, prop6: 'C' } } }, undefined]]]];
    const clearedObj = ['A', ['A', ['A', [{ prop1: 'A', prop2: { prop3: 'B', prop4: { prop6: 'C' } } }]]]];

    expect(ImmutableEx.removeUndefinedProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });
});

describe('removeNullProps', () => {
  test('should remove null objects in map', () => {
    const obj = { prop1: 'A', prop2: null };
    const clearedObj = { prop1: 'A' };

    expect(ImmutableEx.removeNullProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove nested null objects in map - 1', () => {
    const obj = { prop1: 'A', prop2: { prop3: 'B', prop4: null } };
    const clearedObj = { prop1: 'A', prop2: { prop3: 'B' } };

    expect(ImmutableEx.removeNullProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove nested null objects in map - 2', () => {
    const obj = { prop1: 'A', prop2: { prop3: 'B', prop4: { prop5: null, prop6: 'C' } } };
    const clearedObj = { prop1: 'A', prop2: { prop3: 'B', prop4: { prop6: 'C' } } };

    expect(ImmutableEx.removeNullProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove null objects in list', () => {
    const obj = ['A', null];
    const clearedObj = ['A'];

    expect(ImmutableEx.removeNullProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove null objects in nested list - 1', () => {
    const obj = ['A', ['A', ['A', ['A', null]]]];
    const clearedObj = ['A', ['A', ['A', ['A']]]];

    expect(ImmutableEx.removeNullProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });

  test('should remove null objects in nested list - 2', () => {
    const obj = ['A', ['A', ['A', [{ prop1: 'A', prop2: { prop3: 'B', prop4: { prop5: null, prop6: 'C' } } }, null]]]];
    const clearedObj = ['A', ['A', ['A', [{ prop1: 'A', prop2: { prop3: 'B', prop4: { prop6: 'C' } } }]]]];

    expect(ImmutableEx.removeNullProps(Immutable.fromJS(obj)).equals(Immutable.fromJS(clearedObj))).toBeTruthy();
  });
});
