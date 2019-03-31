'use strict';

function compute_median(collection) {
  collection.sort(function (a, b) {
    return a - b;
  });
  //在这里写入代码
  return collection.reduce(function (res, cur, index, arr) {
    if (arr.length % 2 !== 0) {
      res = arr[parseInt(arr.length / 2)];
    } else {
      res = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    }
    return res;
  });
}

module.exports = compute_median;


