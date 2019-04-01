'use strict';
var calculate_median = function (collection) {
  collection = collection.filter(function (cur, index, crr) {
    return (index + 1) % 2 === 0;
  });
  // return collection;
  if (collection.length % 2 !== 0) {
    return collection[Math.floor(collection.length / 2)];
  } else {
    return (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
  }
};
module.exports = calculate_median;
