'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var newArray = new Array();
  if (number_a <= number_b) {
    for (var i = number_a; i <= number_b; i += 1) {
      newArray.push(i);
    }
  } else {
    for (var i = number_a; i >= number_b; i -= 1) {
      newArray.push(i);
    }
  }
  return newArray;
}

module.exports = get_integer_interval;

