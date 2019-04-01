'use strict';
var even_asc_odd_desc = function (collection) {
  var collection_even = collection.filter(function (cur) {
    return cur % 2 === 0;
  }); //偶数
  var collection_odd = collection.filter(function (cur) {
    return cur % 2 !== 0;
  }) //奇数
  // return collection_even;
  collection_even.sort(function (a, b) {
    return a - b;
  });
  collection_odd.sort(function (a, b) {
    return b - a;
  });
  return collection_even.concat(collection_odd);
};
module.exports = even_asc_odd_desc;
