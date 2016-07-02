
function collect_same_elements(collection_a, object_b) {

    var newArray = [];

    collection_a.forEach(function (element) {

        var item = element.key;

        if (isExisted(item, object_b)) {
            newArray.push(item);
        }
    });

    return newArray;
}

function isExisted(item, collection) {

    var arry=collection.value;

    for (var i = 0; i < arry.length; i++) {
        if (arry[i] === item) {
            return true;
        }
    }

    return false;
}



module.exports = collect_same_elements;

