'use strict';

function double_to_one(collection) {
  var str = collection.toString();
  var arr = str.split(',');
  return arr.map(function (currentValue, index, array) {
    return parseInt(currentValue);
  });
  //在这里写入代码
}

module.exports = double_to_one;
