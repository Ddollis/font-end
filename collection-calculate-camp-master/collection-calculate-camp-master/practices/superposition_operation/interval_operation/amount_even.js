'use strict';

function amount_even(collection) {
  collection = collection.filter(function (cur) {
    return cur % 2 === 0;
  });
  return collection.reduce(function (res, cur) {
    return res + cur;
  });
  //在这里写入代码
}

module.exports = amount_even;
