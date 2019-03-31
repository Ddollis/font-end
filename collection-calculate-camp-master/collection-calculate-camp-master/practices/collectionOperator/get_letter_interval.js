'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var newArray = [];
  if (number_a <= number_b) {
    for (var i = number_a - 1; i < number_b; i++) {
      newArray.push(String.fromCharCode('a'.charCodeAt(0) + i));
    }
  } else {
    for (var i = number_a - 1; i >= number_b - 1; i--) {
      newArray.push(String.fromCharCode('a'.charCodeAt(0) + i));
    }
  }
  return newArray;
}

module.exports = get_letter_interval;
