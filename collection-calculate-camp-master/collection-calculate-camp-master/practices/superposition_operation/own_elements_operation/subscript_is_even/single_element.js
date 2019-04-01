'use strict';
var single_element = function (collection) {
  collection = collection.filter(function (cur, index, arr) {
    return (index + 1) % 2 === 0;
  });
  // return collection;
  var res = [];
  for (var i = 0; i < collection.length; i++) {
    let index = collection.indexOf(collection[i]);
    let lastIndex = collection.lastIndexOf(collection[i]);
    if (index === lastIndex) {
      res.push(collection[i]);
    }
  }
  return res;
};
module.exports = single_element;
