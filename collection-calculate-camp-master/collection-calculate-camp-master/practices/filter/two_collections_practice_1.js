'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (currentValue, index, array) {
    return collection_b.indexOf(currentValue)>=0;
  });
  //在这里写入代码
}

module.exports = choose_common_elements;
