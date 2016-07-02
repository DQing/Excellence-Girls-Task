// function printReceipt(inputs) {
//
//     var res1 = res1 = '',
//         res2 = '',
//         res3 = '';
//     var startTitle = "***<没钱赚商店>收据***";
//     var middleTitle = "----------------------";
//     var endTitle = "**********************";
//     var sumM1, sunM2, sumM3, output;
//     var count1 = 0,
//         count2 = 0,
//         count3 = 0;
//
//     for (var i = 0; i < inputs.length; i++) {
//
//         if (inputs[i].barcode === "ITEM000000") {
//
//             count1++;
//             res1 = "名称：" + inputs[i].name + "，" + "数量：" + count1 + inputs[i].unit + "，" + "单价：" + inputs[i].price.toFixed(2) + "(元)" + "，" + "小计：" + (count1 * inputs[i].price).toFixed(2) + "(元)";
//             sumM1 = count1 * inputs[i].price;
//
//         } else if (inputs[i].barcode === 'ITEM000001') {
//
//             count2++;
//             res2 = "名称：" + inputs[i].name + "，" + "数量：" + count2 + inputs[i].unit + "，" + "单价：" + inputs[i].price.toFixed(2) + "(元)" + "，" + "小计：" + (count2 * inputs[i].price).toFixed(2) + "(元)";
//             sumM2 = count2 * inputs[i].price;
//
//         } else {
//             count3++;
//             res3 = "名称：" + inputs[i].name + "，" + "数量：" + count3 + inputs[i].unit + "，" + "单价：" + inputs[i].price.toFixed(2) + "(元)" + "，" + "小计：" + (count3 * inputs[i].price).toFixed(2) + "(元)";
//             sumM3 = count3 * inputs[i].price;
//         }
//
//     }
//     output = startTitle + '\n' + res1 + '\n' + res2 + '\n' + res3 + '\n' + middleTitle + '\n' + "总计：" + (sumM1 + sumM2 + sumM3).toFixed(2) + "(元)" + '\n' + endTitle;
//     console.log(output);
//
// }

function printReceipt(inputs){

    var cartItems=buildCartItems(inputs);
    var receiptItems=buildReceiptItems(cartItems);
    var receipt=buildReceipt(receiptItems);
    var receiptText=generateReceiptText(receipt);
    console.log(receiptText);
}

function buildCartItems(items) {

    var cartItems=[];
    items.forEach(function (item) {

      var cartItem=isExist(item.barcode,cartItems);
      if(cartItem){
        cartItem.count++;
      }else {
        cartItems.push({item: item, count: 1});
      }
    });
    return cartItems;
}

function isExist(barcode,cartItems) {

   for(var i=0;i<cartItems.length;i++){
     if(cartItems[i].item.barcode===barcode)
       return cartItems[i];
   }
}

function buildReceiptItems(cartItems) {

    var receiptItems=[];
    cartItems.forEach(function (cartItem) {
      receiptItems.push({cartItem: cartItem,subTotal: cartItem.item.price*cartItem.count});
    });

    return receiptItems;

}

function buildReceipt(receiptItems) {

    var receipt;
    var total=0;
    receiptItems.forEach(function (receiptItem) {
      total+=receiptItem.subTotal;
    });
    receipt={receiptItems:receiptItems,total:total};
    return receipt;
}
function formatPrice(price) {

    return price.toFixed(2);
}
function generateReceiptText(receipt){

    var receiptText='';
    receipt.receiptItems.forEach(function (receiptitem){

      receiptText+='名称：'+receiptitem.cartItem.item.name+'，'+'数量：'+receiptitem.cartItem.count+receiptitem.cartItem.item.unit+'，'+'单价：'+formatPrice(receiptitem.cartItem.item.price)+'(元)'+'，'+'小计：'+formatPrice(receiptitem.subTotal)+'(元)'+'\n';
    });

      return '***<没钱赚商店>收据***\n' +
       receiptText+
      '----------------------\n' +
      '总计：'+formatPrice(receipt.total)+'(元)\n' +
      '**********************';

}
