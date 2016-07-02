function printReceipt(inputs) {

    var receiptItems=getReceptionItems(inputs);
    var receipt=getReceipt(receiptItems);
    var receiptText=outputReceiptText(receipt)
    console.log(receiptText);
}

function getReceptionItems(cartItems){

    var receiptItems=[];
    cartItems.forEach(function (cartItem) {
      var receiptTotal=cartItem.price*cartItem.count;
      receiptItems.push({cartItems:cartItem,receiptTotal:receiptTotal});
    });
    return receiptItems;
}

function getReceipt(receiptItems){
    var receipt;
    var totalMoney=0;
    receiptItems.forEach(function (receiptItem) {
        totalMoney+=receiptItem.receiptTotal;
    });
    receipt={receiptItems:receiptItems,totalMoney:totalMoney};
    return receipt;
}

function outputReceiptText(receipt){

     var receiptText='';
  receipt.receiptItems.forEach(function (receiptitem){
    receiptText+='名称：'+receiptitem.cartItems.name+'，'+'数量：'+receiptitem.cartItems.count+receiptitem.cartItems.unit+'，'+'单价：'+formatPrice(receiptitem.cartItems.price)+'(元)'+'，'+'小计：'+formatPrice(receiptitem.receiptTotal)+'(元)'+'\n';
  });
     return '***<没钱赚商店>收据***\n' +
             receiptText+
            '----------------------\n' +
            '总计：'+formatPrice(receipt.totalMoney)+'(元)'+'\n' +
            '**********************';
}
function formatPrice(price){

  return price.toFixed(2);
}
