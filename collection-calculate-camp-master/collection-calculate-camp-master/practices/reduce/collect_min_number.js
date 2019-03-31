'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce(function (res, cur, index, arr) {
    return res > cur ? cur : res;
  }, Number.MAX_VALUE)
}

module.exports = collect_min_number;

