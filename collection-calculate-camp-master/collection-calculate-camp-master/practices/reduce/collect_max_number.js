'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce(function (res, cur, index, arr) {
    return res = res > cur ? res : cur;
  }, Number.MIN_VALUE)
}

module.exports = collect_max_number;
