'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RelayHelper = function RelayHelper() {
  _classCallCheck(this, RelayHelper);
};

RelayHelper.getLimitAndSkipValue = function (searchArgs, count, defaultPageSize, maximumPageSize) {
  var after = searchArgs.get('after');
  var before = searchArgs.get('before');
  var first = searchArgs.get('first');
  var last = searchArgs.get('last');

  if ((first || after) && (last || before)) {
    throw new Error('Mixing first and after with last and before is not supported.');
  }

  var limit = void 0;
  var skip = void 0;

  if (first || after) {
    if (!first) {
      first = defaultPageSize;
    }
  } else if (last || before) {
    if (!last) {
      last = defaultPageSize;
    }
  } else {
    first = defaultPageSize;
  }

  if (first > maximumPageSize) {
    first = maximumPageSize;
  }

  if (last > maximumPageSize) {
    last = maximumPageSize;
  }

  if (first && after) {
    var afterValue = parseInt(after, 10);

    limit = first;
    skip = afterValue;
  } else if (first) {
    limit = first;
    skip = 0;
  } else if (last && before) {
    var beforeValue = parseInt(before, 10);

    limit = last;
    skip = beforeValue.idx - last;

    if (skip < 0) {
      skip = 0;
    }
  } else if (last) {
    limit = last;
    skip = 0;
  }

  var hasNextPage = skip + limit < count;
  var hasPreviousPage = skip !== 0;

  return {
    limit: limit,
    skip: skip,
    hasNextPage: hasNextPage,
    hasPreviousPage: hasPreviousPage
  };
};

exports.default = RelayHelper;