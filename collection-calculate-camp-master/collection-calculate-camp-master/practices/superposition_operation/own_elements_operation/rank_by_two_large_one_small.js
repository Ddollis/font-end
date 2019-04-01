'use strict';

function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  collection.sort(function (a, b) {
    return a - b;
  });
  var index = 0;
  while (index < collection.length) {
    if (index + 2 > collection.length - 1) {
      break;
    }
    swap(collection, index, index + 1);
    index++;
    swap(collection, index, index + 1);
    index+=2;
  }
  return collection;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = rank_by_two_large_one_small;
