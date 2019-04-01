'use strict';

function one_add_next_multiply_three(collection) {
  collection = collection.map(function (cur, index, arr) {
    if (index === arr.length - 1) {
      return cur;
    }
    return (cur + arr[index + 1]) * 3;
  });
  return collection.slice(0, collection.length - 1);
}

module.exports = one_add_next_multiply_three;
