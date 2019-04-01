'use strict';
var even_group_calculate_average = function (collection) {
  collection = collection.filter(function (cur, index, arr) {
    return (index + 1) % 2 === 0;
  });
  collection = collection.filter(function (cur) {
    return cur % 2 === 0;
  });
  var res = [];
  if (collection.length === 0) {
    return [0];
  }
  var group = {one: [], two: [], three: []};
  for (var i = 0; i < collection.length; i++) {
    if (Math.floor(collection[i] / 10) === 0) {
      group['one'].push(collection[i]);
    } else if (Math.floor(collection[i] / 100) === 0) {
      group['two'].push(collection[i]);
    } else {
      group['three'].push(collection[i]);
    }
  }
  // return group;
  if (group['one'].length === 0 && group['two'].length === 0 && group['three'].length !== 0) {
    res.push(group['three'].reduce(function (res, cur, index, arr) {
      return res + cur / arr.length;
    }, 0));
  } else {
    res.push(group['one'].reduce(function (res, cur, index, arr) {
      return res + cur / arr.length;
    }, 0));
    res.push(group['two'].reduce(function (res, cur, index, arr) {
      return res + cur / arr.length;
    }, 0));
    res.push(group['three'].reduce(function (res, cur, index, arr) {
      return res + cur / arr.length;
    }, 0));
  }
  return res;
};
module.exports = even_group_calculate_average;
