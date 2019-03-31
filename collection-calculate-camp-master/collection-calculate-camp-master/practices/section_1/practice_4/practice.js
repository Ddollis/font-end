function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  collection_a = collection_a.map(function (cur, index, arr) {
    return cur.key;
  });
  // return  collection_a;
  object_b = object_b.value;
  return collection_a.filter(function (cur, index, arr) {
    return object_b.indexOf(cur)>=0;
  });
}

module.exports = collect_same_elements;
