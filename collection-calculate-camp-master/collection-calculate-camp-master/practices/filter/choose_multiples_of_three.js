'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter(function (currentValue, index, array) {
    return currentValue % 3 === 0;
  })
  //在这里写入代码
}

module.exports = choose_multiples_of_three;
