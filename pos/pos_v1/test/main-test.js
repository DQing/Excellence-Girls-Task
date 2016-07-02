describe('pos', function() {
  var allItems;
  var inputs;

  beforeEach(function() {
    allItems = loadAllItems();
    inputs = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
    ];
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    printReceipt(inputs);

    var expectText =
      '***<没钱赚商店>收据***\n' +
      '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
      '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
      '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
      '----------------------\n' +
      '总计：51.00(元)\n' +
      '节省：7.50(元)\n' +
      '**********************';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});

describe('test pos_v1', function() {
  var allItems;
  var inputs;
  var promotions = loadPromotions();
  beforeEach(function() {
    allItems = loadAllItems();
    inputs = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
    ];
  });

  it('should print buildCartItems correct text', function() {

    var cartItems=buildCartItems(inputs,allItems);

    var expectText =[{Item:{barcode: 'ITEM000001',name: '雪碧', unit: '瓶', price: 3.00}, count:5},
                     {Item:{barcode: 'ITEM000003',name: '荔枝', unit: '斤', price: 15.00}, count:2},
                     {Item:{barcode: 'ITEM000005',name: '方便面', unit: '袋', price: 4.50}, count:3}
      ];

    expect(cartItems).toEqual(expectText);
  });

  it('should print buildReceiptItems correct text', function() {
    var cartItems=[{Item:{barcode: 'ITEM000001',name: '雪碧', unit: '瓶', price: 3.00}, count:5},
      {Item:{barcode: 'ITEM000003',name: '荔枝', unit: '斤', price: 15.00}, count:2},
      {Item:{barcode: 'ITEM000005',name: '方便面', unit: '袋', price: 4.50}, count:3}
    ];

    var ReceiptItems=buildReceiptItems(cartItems,promotions);


    var expectText =[{receiptItem: cartItems[0], subTotal: 12.00, saved: 3.00},
                     {receiptItem: cartItems[1], subTotal: 30.00, saved: 0.00},
                     {receiptItem: cartItems[2], subTotal: 9.00,saved: 4.50}
    ];
    expect(ReceiptItems).toEqual(expectText);
  });

  it('should print buildReceipt correct text', function() {
    var cartItems=[{Item:{barcode: 'ITEM000001',name: '雪碧', unit: '瓶', price: 3.00}, count:5},
      {Item:{barcode: 'ITEM000003',name: '荔枝', unit: '斤', price: 15.00}, count:2},
      {Item:{barcode: 'ITEM000005',name: '方便面', unit: '袋', price: 4.50}, count:3}
    ];

    var receiptItems=[{receiptItem: cartItems[0], subTotal: 12.00, saved: 3.00},
      {receiptItem: cartItems[1], subTotal: 30.00, saved: 0.00},
      {receiptItem: cartItems[2], subTotal: 9.00,saved: 4.50}
    ];

    var receipt = buildReceipt(receiptItems);

    var expectText= {receiptItems: receiptItems, savedTotal: 7.50, total: 51.00};
    expect(receipt).toEqual(expectText);
  });

  it('should print generateReceiptText correct text', function() {
    var cartItems=[{Item:{barcode: 'ITEM000001',name: '雪碧', unit: '瓶', price: 3.00}, count:5},
      {Item:{barcode: 'ITEM000003',name: '荔枝', unit: '斤', price: 15.00}, count:2},
      {Item:{barcode: 'ITEM000005',name: '方便面', unit: '袋', price: 4.50}, count:3}
    ];

    var receiptItems=[{receiptItem: cartItems[0], subTotal: 12.00, saved: 3.00},
      {receiptItem: cartItems[1], subTotal: 30.00, saved: 0.00},
      {receiptItem: cartItems[2], subTotal: 9.00,saved: 4.50}
    ];

    var receipt = {receiptItems: receiptItems, savedTotal: 7.50, total: 51.00};
    var receiptText = generateReceiptText(receipt);
    var expectText =
      '***<没钱赚商店>收据***\n' +
      '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
      '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
      '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
      '----------------------\n' +
      '总计：51.00(元)\n' +
      '节省：7.50(元)\n' +
      '**********************';

    expect(receiptText).toEqual(expectText);
  });
});
