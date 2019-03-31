'use strict';

function grouping_count(collection) {
  collection.sort(function (a, b) {
    return a - b;
  });
  var result = {};
  for (var i = 0; i < collection.length;) {
    var index = collection.indexOf(collection[i]);
    var lastindex = collection.lastIndexOf(collection[i]);
    var count = lastindex - index + 1;
    result[collection[i]] = count;
    i = lastindex + 1;
  }
  return result;
  //在这里写入代码
}

module.exports = grouping_count;
