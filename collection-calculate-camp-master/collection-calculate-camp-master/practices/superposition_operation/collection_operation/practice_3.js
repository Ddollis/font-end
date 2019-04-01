'use strict';

function hybrid_operation_to_uneven(collection) {
  collection = collection.filter(function (cur) {
    return cur % 2 !== 0;
  });
  return collection.reduce(function (res, cur) {
    return res + cur * 3 + 5;
  }, 0);
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

