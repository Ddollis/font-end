'use strict';

function hybrid_operation_to_uneven(collection) {
  collection = collection.filter(function (cur) {
    return cur % 2 !== 0;
  });
  return collection.map(function (cur) {
    return cur * 3 + 2;
  });
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

