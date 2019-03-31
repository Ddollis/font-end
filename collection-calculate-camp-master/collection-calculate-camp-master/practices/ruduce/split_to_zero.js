'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var res = [];
  if (number * 10 % 2 === 0) {
    while (number >= 0) {
      res.push(number);
      number = (number * 10 - interval * 10) / 10;
    }
  } else {
    while (true) {
      res.push(number);
      if (number < 0) break;
      number = (number * 10 - interval * 10) / 10;
    }
  }

  return res;
}

module.exports = spilt_to_zero;
