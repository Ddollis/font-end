function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter(function (cur) {
    return object_b.value.indexOf(cur) >= 0;
  });
}

module.exports = collect_same_elements;
