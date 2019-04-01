'use strict';

function average_to_letter(collection) {
  var avg = Math.ceil(collection.reduce(function (res, cur, index, arr) {
    return res + cur / arr.length;
  }, 0));
  return String.fromCharCode(96 + avg);
  //在这里写入代码
}

module.exports = average_to_letter;

