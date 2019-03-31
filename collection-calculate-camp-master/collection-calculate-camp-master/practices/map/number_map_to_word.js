'use strict';
var number_map_to_word = function (collection) {
  return collection.map(function (cur) {
    return String.fromCharCode(96 + cur);
  });
};

module.exports = number_map_to_word;
