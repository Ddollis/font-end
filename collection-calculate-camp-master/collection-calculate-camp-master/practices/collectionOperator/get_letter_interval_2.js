'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var array = [];
  if (number_a <= number_b) {
    for (var i = number_a; i <= number_b; i++) {
      var a = getResult(i);
      array.push(a)
    }
  } else {
    for (var i = number_a; i >= number_b; i--) {
      var a = getResult(i);
      array.push(a)
    }
  }
  return array;
}
// 26 z 27 aa
function getResult(number) {
  var result = '';
  var str = 'zabcdefghijklmnopqrstuvwxy';
  while (number !== 0) {
    var ys = number % 26;
    number = parseInt((number-1) / 26);
    result = str[ys] + result;
  }
  return result;
}

module.exports = get_letter_interval_2;

