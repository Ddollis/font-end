'use strict';

function average_uneven(collection) {
  collection = collection.filter(function (cur) {
    return cur % 2 !== 0;
  });
  return collection.reduce(function (res, cur, index, arr) {
    return res + cur / arr.length;
  }, 0);
  //在这里写入代码
}

module.exports = average_uneven;
