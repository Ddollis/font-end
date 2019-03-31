function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return collection_a.map(function (cur, index, arr) {
    if (object_b.value.indexOf(cur.key) !== -1) {
      cur.count = cur.count - parseInt(cur.count / 3);
      return cur;
    }
    return cur;
  });
}

module.exports = create_updated_collection;
