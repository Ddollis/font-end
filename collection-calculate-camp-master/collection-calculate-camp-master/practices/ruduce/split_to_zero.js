'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var res = [];
  while (number >= 0) {
    res.push(number);
    number = number - interval;
  }
  return res;
}

module.exports = spilt_to_zero;
