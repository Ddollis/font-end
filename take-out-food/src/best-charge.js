// var loadAllItems = require('./items');
// var loadPromotions = require('./promotions');

function bestCharge(selectedItems) {
  //输入
  var items = loadAllItems();
  var promotions = loadPromotions();
  var index = tranceInputs(selectedItems);

  var res = `============= 订餐明细 =============\n`;

  res += detail(index, items, promotions);

  console.log(res);
  //处理

  return res;
}

function detail(index, items, promotions) {
  let name, price;
  let str = '';
  let total = 0;
  let flag = false;
  let total2 = 0;
  index.forEach(function (cur1, index1, array1) {
    if (promotions[1].items.indexOf(cur1.id) >= 0) {
      flag = true;
    }
    items.forEach(function (cur2, index2, array2) {
      if (cur1.id === cur2.id) {
        if (promotions[1].items.indexOf(cur1.id) >= 0) {
          total2 += cur2.price / 2 * parseInt(cur1.count);
        } else {
          total2 += cur2.price * parseInt(cur1.count);
        }
        str += cur2.name + ' x ' + cur1.count + ' = ' + cur2.price * parseInt(cur1.count) + '元\n';
        total += cur2.price * parseInt(cur1.count);
      }
    });
  });
  str += `-----------------------------------\n`;
  if (total < 30 && !flag) {
    str += '总计：' + total + '元\n===================================';
  }
  if (total >= 30 && flag) {
    let total1 = total - 6;
    if (total1 <= total2) {
      str += `使用优惠:\n满30减6元，省6元\n-----------------------------------\n总计：` + total1 + `元\n===================================`;
    } else {
      str += `使用优惠:\n指定菜品半价(黄焖鸡，凉皮)，省` + (total - total2) + `元\n-----------------------------------\n总计：` + total2 +
        `元\n===================================`
    }
  }

  return str;
}

function tranceInputs(inputs) {
  let arr = [];
  inputs.forEach(function (cur, index, array) {
    let arr1 = cur.split(' x ');
    arr.push({id: arr1[0], count: parseInt(arr1[1])});
  });
  return arr;
}

// bestCharge(["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]);
