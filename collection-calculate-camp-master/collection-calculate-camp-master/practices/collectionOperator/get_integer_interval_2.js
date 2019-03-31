'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var newArray = new Array();
  if (number_a <= number_b) {
    for (var i = number_a; i <= number_b; i += 1) {
      if (i % 2 === 0) {
        newArray.push(i);
      }
    }
  } else {
    for (var i = number_a; i >= number_b; i -= 1) {
      if (i % 2 === 0) {
        newArray.push(i);
      }
    }
  }
  return newArray;
}

module.exports = get_integer_interval_2;
