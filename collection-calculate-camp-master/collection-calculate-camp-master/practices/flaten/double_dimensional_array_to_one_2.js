'use strict';

function double_to_one(collection) {
  var str = collection.toString();
  var arr = str.split(',');
  var newArr = arr.map(function (currentValue, index, array) {
    return parseInt(currentValue);
  });

  var solution = [];
  for (var i = 0; i < newArr.length; i++) {
    var flag = true;
    for (var j = 0; j < solution.length; j++) {
      if (newArr[i] === solution[j]) {
        flag = false;
      }
    }
    if (flag) {
      solution.push(newArr[i]);
    }
  }
  return solution;
  //在这里写入代码
}

module.exports = double_to_one;
