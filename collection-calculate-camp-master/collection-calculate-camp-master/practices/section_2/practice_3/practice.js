function count_same_elements(collection) {
  //在这里写入代码
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].indexOf('-') !== -1 || collection[i].indexOf(':') !== -1) {
      // return collection[i].indexOf('-');
      let count = collection[i].slice(2);
      let cur = collection[i][0];
      collection.splice(i, 1);
      // return collection;
      while (count--) {
        collection.splice(i++, 0, cur);
      }
    } else if (collection[i].indexOf('[') !== -1) {
      let count = collection[i].slice(2, collection[i].indexOf(']'));
      let cur = collection[i][0];
      collection.splice(i, 1);
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
    res.push({name: collection[i], summary: end - begin + 1});
    i = end + 1;
  }
  return res;
}

module.exports = count_same_elements;
