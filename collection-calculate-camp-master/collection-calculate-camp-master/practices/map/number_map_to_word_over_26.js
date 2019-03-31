'use strict';
var number_map_to_word_over_26 = function (collection) {
  return collection.map(function (cur) {
    var str = '';
    while (cur !== 0) {
      var ys = cur % 26;
      cur = parseInt((cur - 1) / 26);
      str = String.fromCharCode(96 + ys) + str;
    }
    return str;
  });
};

module.exports = number_map_to_word_over_26;
