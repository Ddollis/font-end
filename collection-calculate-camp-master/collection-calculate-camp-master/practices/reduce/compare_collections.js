'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce(function (res, cur, index, arr) {
    return res && (cur === collection_b[index]);
  }, true);
}

module.exports = compare_collections;


