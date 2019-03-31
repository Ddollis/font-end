'use strict';

function find_first_even(collection) {
  //在这里写入代码
  return collection.reduce(function (res, cur, index, arr) {
    if (res % 2 !== 0) {
      if (cur % 2 === 0) {
        res = cur;
      }
    }
    return res;
  }, 1);
}

module.exports = find_first_even;

