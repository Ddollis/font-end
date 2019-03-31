'use strict';

function calculate_elements_sum(collection, element) {
  return collection.reduce(function (res, cur, index, arr) {
    return res = cur === element ? index : res;
  });
  //在这里写入代码
}

module.exports = calculate_elements_sum;
