'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(function (currentValue, index, array) {
    return collection_a.indexOf(currentValue) >= 0;
  });
}

module.exports = get_intersection;
