'use strict';

function median_to_letter(collection) {
  var avg;
  if (collection.length % 2 === 0) {
    avg = Math.ceil((collection[collection.length / 2] + collection[collection.length / 2 + 1]) / 2);
  } else {
    avg = collection[Math.floor(collection.length / 2)];
  }
  var str = '';
  while (avg !== 0) {
    var ys = avg % 27;
    var avg = Math.floor((avg - 1) / 26);
    str = String.fromCharCode(96 + ys)+str;
  }
  return str;
  //在这里写入代码
}

module.exports = median_to_letter;
