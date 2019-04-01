'use strict';
var calculate_average = function (collection) {
  collection = collection.filter(function (cur, index, arr) {
    return (index + 1) % 2 === 0;
  });
  return collection.reduce(function (res, cur, index, arr) {
    return res + cur / arr.length;
  }, 0);
};
module.exports = calculate_average;
