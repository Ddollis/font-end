'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (currentValue) {
    return collection_b.indexOf(currentValue) === -1;
  });
  //在这里写入代码
}

module.exports = choose_no_common_elements;
