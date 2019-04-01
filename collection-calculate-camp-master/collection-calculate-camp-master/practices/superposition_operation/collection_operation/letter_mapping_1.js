'use strict';

function even_to_letter(collection) {
  collection = collection.filter(function (cur) {
    return cur % 2 === 0;
  });

  return collection.map(function (cur) {
    return String.fromCharCode(96 + cur);
  })
  //在这里写入代码
}

module.exports = even_to_letter;
