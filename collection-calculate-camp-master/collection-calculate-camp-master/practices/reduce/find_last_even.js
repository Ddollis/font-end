'use strict';

function find_last_even(collection) {
  //在这里写入代码
  return collection.reduce(function (res, cur) {
    return res = cur % 2 === 0 ? cur : res;
  });
}

module.exports = find_last_even;
