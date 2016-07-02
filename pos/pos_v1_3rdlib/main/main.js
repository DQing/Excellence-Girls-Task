// function printReceipt(inputs) {
//
//     var startTitle="***<没钱赚商店>收据***";
//     var middleTitle="----------------------";
//     var endTitle="**********************";
//     var output='',sumofbarcode,sum=0,sale=0;
//     var result=[];
//     var product=loadAllItems();
//     for (var i = 0; i < product.length; i++) {
//
//       sumofbarcode=isExist(product[i].barcode,inputs);
//
//       if(sumofbarcode){
//
//           result.push({name: product[i].name,count: sumofbarcode,price: product[i].price,unit: product[i].unit});
//
//       }
//     }
//
//     for (var i = 0; i < result.length; i++) {
//       if (result[i].count>2) {
//
//       output+="名称："+result[i].name+"，"+"数量："+result[i].count+result[i].unit+"，"+"单价："+result[i].price.toFixed(2)+"(元)"+"，"+"小计："+(result[i].count*result[i].price-result[i].price).toFixed(2)+"(元)"+'\n';
//       sum+=result[i].count*result[i].price;
//       sale+=result[i].price;
//     }
//     else{
//       output+="名称："+result[i].name+"，"+"数量："+result[i].count+result[i].unit+"，"+"单价："+result[i].price.toFixed(2)+"(元)"+"，"+"小计："+(result[i].count*result[i].price).toFixed(2)+"(元)"+'\n';
//       sum+=result[i].count*result[i].price;
//     }
//     }
//
//     console.log(startTitle+'\n'+output+middleTitle+'\n'+'总计：'+(sum-sale).toFixed(2)+"(元)"+'\n'+'节省：'+sale.toFixed(2)+"(元)"+'\n'+endTitle);
//
// }
// function isExist(element,items){
//
//     var count=0;
//     for (var i = 0; i < items.length; i++) {
//
//         if (items[i].length>10 && element===items[i].substr(0,10)) {
//
//            count=items[i].charAt(11);
//
//         }else if(element === items[i]){
//
//           count++;
//          }
//
//     }
//     return count;
// }

function printReceipt(tags) {

  var allItems = loadAllItems();
  var cartItems = buildCartItems(tags, allItems);

  var promotions = loadPromotions();
  var receiptItems = buildReceiptItems(cartItems, promotions);

  var receipt = buildReceipt(receiptItems);
  var receiptText = generateReceiptText(receipt);

  console.log(receiptText);
}


function buildCartItems(tags, allItems) {

  var cartItems = [];
  tags.forEach(function (tag) {

    var barcode = tag.split('-');
    var allItem = findExit(barcode[0], allItems);
    var count = parseFloat(barcode[1] || 1);

    var cartItem = findExitCartItems(barcode[0], cartItems);
    if (cartItem) {
      cartItem.count++;
    }
    else {
      cartItems.push({Item: allItem, count: count});
    }
  });
  return cartItems;
}


function findExit(barcode, allItems) {
  for (var i = 0; i < allItems.length; i++) {

    if (barcode === allItems[i].barcode) {
      return allItems[i];
    }
  }
}


function findExitCartItems(barcode, cartItems) {

  for (var i = 0; i < cartItems.length; i++) {

    if (barcode === cartItems[i].Item.barcode) {
      return cartItems[i];
    }
  }
  return false;
}


function buildReceiptItems(cartItems, promotions) {

  var receiptItems = [];

  cartItems.forEach(function (cartItem) {

    var subTotal = cartItem.Item.price * parseInt(cartItem.count);
    var saved = 0;
    var promotionType = getpromotiontype(cartItem, promotions);

    if (promotionType === 'BUY_TWO_GET_ONE_FREE') {

      saved = cartItem.Item.price *  parseInt(cartItem.count / 3);
      subTotal -= saved;
    }
    receiptItems.push({receiptItem: cartItem, subTotal: subTotal, saved: saved});
  });

  return receiptItems;
}


function getpromotiontype(cartItem, promotions) {

  var promotionType = '';

  for (var i = 0; i < promotions.length; i++) {
    var promotionBarcode = promotions[i].barcodes;

    if (findPromotionBarcode(cartItem, promotionBarcode)) {
      promotionType = promotions[i].type;
    }
  }

  return promotionType;
}


function findPromotionBarcode(cartItem, promotionBarcode) {

  for (var i = 0; i < promotionBarcode.length; i++) {

    if (cartItem.Item.barcode === promotionBarcode[i]) {
      return true;
    }
  }
}


function buildReceipt(receiptItems) {

  var savedTotal = 0;
  var total = 0;

  receiptItems.forEach(function (receiptItem) {

    savedTotal += receiptItem.saved;
    total += receiptItem.subTotal;
  });

  var receipt = {receiptItems: receiptItems, savedTotal: savedTotal, total: total};
  return receipt;
}


function generateReceiptText(receipt) {

  var receiptText = '***<没钱赚商店>收据***\n'

    +  getSubItemText(receipt.receiptItems) +
    '----------------------\n' +
    '总计：' + receipt.total.toFixed(2) + '(元)\n' +
    '节省：' + receipt.savedTotal.toFixed(2) + '(元)\n' +
    '**********************';

  return receiptText;
}


function getSubItemText(receiptItems) {

  var ItemsList = '';

  receiptItems.forEach(function (receiptItem) {
    var ItemText = receiptItem.receiptItem;
    ItemsList += '名称：' + ItemText.Item.name + '，数量：' + ItemText.count + ItemText.Item.unit + '，单价：' + ItemText.Item.price.toFixed(2) + '(元)，小计：' + receiptItem.subTotal.toFixed(2) + '(元)\n';
  });

  return ItemsList;
}
