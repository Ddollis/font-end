'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var flag = false;
  return collection.reduce(function (res, cur, index, arr) {
    if (!flag) {
      if (cur === element) {
        res = index;
        flag = true;
      }
    }
    return res;
  });
}

module.exports = calculate_elements_sum;

