'use strict';
var is_exist_element = function (collection, element) {
  collection = collection.filter(function (cur, index, arr) {
    return index % 2 === 0
  });
  return collection.indexOf(element) >= 0;

};
module.exports = is_exist_element;
