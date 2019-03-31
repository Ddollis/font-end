function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = [];
  for (var i = 0; i < collection_a.length;) {
    var begin = collection_a.indexOf(collection_a[i]);
    var end = collection_a.lastIndexOf(collection_a[i]);
    collection_c.push({key: collection_a[i], count: end - begin + 1});
    i = end + 1;
  }
  return collection_c.map(function (cur, index, arr) {
    if (object_b.value.indexOf(cur.key) !== -1) {
      cur.count = cur.count - parseInt(cur.count / 3);
      return cur;
    }
    return cur;
  });
  // return res;

}

module.exports = create_updated_collection;
