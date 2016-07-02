// function printReceipt(inputs) {
//
//     var startTitle="***<没钱赚商店>收据***";
//     var middleTitle="----------------------";
//     var endTitle="**********************";
//     var output='',sumofbarcode,sum=0;
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
//
//       output+="名称："+result[i].name+"，"+"数量："+result[i].count+result[i].unit+"，"+"单价："+result[i].price.toFixed(2)+"(元)"+"，"+"小计："+(result[i].count*result[i].price).toFixed(2)+"(元)"+'\n';
//       sum+=result[i].count*result[i].price;
//     }
//
//     console.log(startTitle+'\n'+output+middleTitle+'\n'+'总计：'+sum.toFixed(2)+"(元)"+'\n'+endTitle);
//
// }
// function isExist(element,items){
//
//     var count=0;
//     for (var i = 0; i < items.length; i++) {
//
//          if(element === items[i]){
//
//           count++;
//          }
//
//     }
//     return count;
// }

function printReceipt(inputs){
  var items=loadAllItems();
  var cartBarcode=buildCartBarcode(inputs);
  var cartItems=buildCartItems(cartBarcode,items);
  var receipt=buildReceipt(cartItems);
  console.log(receipt);
}
function buildCartBarcode(inputs) {
  var cartBarcodes=[];
  inputs.forEach(function (input) {
    var cartBarcode=isExist(input,cartBarcodes);
    if(cartBarcode) {
      cartBarcode.count++;
    }else {
      cartBarcodes.push({barcode: input, count: 1});
    }
  });
  return cartBarcodes;
}
function isExist(input,cartBarcode) {
  for(var i = 0;i < cartBarcode.length;i++){
    if(input===cartBarcode[i].barcode)
      return cartBarcode[i];
  }
}
function buildCartItems(cartBarcode,items) {
  var cartItems=[];
  items.forEach(function (item) {
    var count=isEqual(item,cartBarcode);
    if (count){
      cartItems.push({item:item,count:count,subTotal:item.price*count});
    }
  });
    return cartItems;
}
function isEqual(item,cartBarcode) {
  for (var i = 0;i < cartBarcode.length;i++){
    if(item.barcode === cartBarcode[i].barcode)
      return cartBarcode[i].count;
  }

}
function fomatePrice(price) {
  return price.toFixed(2);
}
function buildReceipt(cartItems){
  var total=0;
  var text='';
  cartItems.forEach(function (cartItem) {
    total+=cartItem.subTotal;
    text+='名称：'+cartItem.item.name+'，数量：'+cartItem.count+cartItem.item.unit+'，单价：'+fomatePrice(cartItem.item.price)+'(元)，小计：'+fomatePrice(cartItem.subTotal)+'(元)\n';
  });
  return  '***<没钱赚商店>收据***\n' +
    text+
    '----------------------\n' +
    '总计：'+fomatePrice(total)+'(元)\n' +
    '**********************';
}
