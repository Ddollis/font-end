function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(function (cur) {
    return collection_b[0].indexOf(cur) >= 0;
  })
}

module.exports = collect_same_elements;
