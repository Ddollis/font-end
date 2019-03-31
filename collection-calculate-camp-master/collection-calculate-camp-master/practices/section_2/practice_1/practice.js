function count_same_elements(collection) {
  //在这里写入代码
  var res = [];
  for (var i = 0; i < collection.length;) {
    var begin = collection.indexOf(collection[i]);
    var end = collection.lastIndexOf(collection[i]);
    res.push({key: collection[i], count: end - begin + 1});
    i = end + 1;
  }
  return res;
}

module.exports = count_same_elements;
