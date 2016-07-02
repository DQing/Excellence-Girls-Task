var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var router = express();

router.listen(8080);
router.use(bodyParser.json());
fs.exists("./item.json", function (exists) {
    if (!exists) {
        fs.open("./item.json", "a", function (err, fd) {
            if (err) {
                console.log("文件不存在,创建不成功!");
            }
            else {
                fs.writeFileSync("./item.json", JSON.stringify([]));
            }

        });
    }
});

router.post('/products', require("./addItem").insertData);
router.delete('/products/:id', require("./deleteItem"));
router.get('/products/:id', require("./findItem").findOne);
router.get('/products', require("./findItem").findAll);
router.put('/products/:id', require("./updateItem"));

