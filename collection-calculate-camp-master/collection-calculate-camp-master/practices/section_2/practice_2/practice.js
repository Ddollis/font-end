function count_same_elements(collection) {
  //在这里写入代码
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].indexOf('-') !== -1) {
      // return collection[i].indexOf('-');
      var count = collection[i][2];
      var cur = collection[i][0];
      collection.splice(i, 1);
      // return collection;
      while (count--) {
        collection.splice(i++, 0, cur);
      }
    }
  }
  // return collection;
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
