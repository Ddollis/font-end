'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [];
  collection.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < collection.length;) {
    result.push(collection[i]);
    var lastIndex = collection.lastIndexOf(collection[i]);
    i = lastIndex + 1;
  }
  return result;
}

module.exports = choose_no_repeat_number;
