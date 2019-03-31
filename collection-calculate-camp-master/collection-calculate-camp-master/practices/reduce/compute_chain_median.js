'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var arr = collection.split('->').map(function (cur) {
    return parseInt(cur);
  });
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr.reduce(function (res, cur, index, arr) {
    if (arr.length % 2 === 0) {
      res = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
      res = arr[parseInt(arr.length / 2)];
    }
    return res;
  }, 0);
}

module.exports = compute_chain_median;
