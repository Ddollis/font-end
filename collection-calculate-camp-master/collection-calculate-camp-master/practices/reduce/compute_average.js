'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce(function (res, cur, index, arr) {
    return res + cur / arr.length;
  }, 0);
}

module.exports = compute_average;

