'use strict';

function hybrid_operation(collection) {
  return collection.reduce(function (res, cur) {
    return res + cur * 3 + 2;
  }, 0);
  //在这里写入代码
}

module.exports = hybrid_operation;

