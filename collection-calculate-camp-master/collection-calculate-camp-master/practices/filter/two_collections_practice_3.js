'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(function (currentValue, index, array) {
    for (var i = 0; i < collection_b.length; i++) {
      if (currentValue % collection_b[i] === 0) {
        return true;
      }
    }
    return false;
  });
  //在这里写入代码
}

module.exports = choose_divisible_integer;
