'use strict';

function map_to_even(collection) {
  return collection.map(function (currentValue, index, arr) {
    return currentValue * 2;
  });
}

module.exports = map_to_even;
