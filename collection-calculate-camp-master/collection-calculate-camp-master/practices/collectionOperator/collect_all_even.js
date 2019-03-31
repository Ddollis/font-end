'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var newArray = new Array();
  collection.forEach(function (item, index, array) {
    if (array[item] % 2 === 0) {
      newArray.push(array[item]);
    }
  });
  return newArray;
}

module.exports = collect_all_even;
