var fs = require("fs");
function deleteData(req, res) {
    var Data = JSON.parse(fs.readFileSync('./item.json'));
    for (var i = 0; i < Data.length; i++) {
        if (Data[i].id === parseInt(req.params.id)) {
            Data.splice(i, 1);
            fs.writeFileSync("./item.json", JSON.stringify(Data));
            res.status(204).end();
            return true;
        }
    }
    res.status(404).end();
}

module.exports = deleteData;