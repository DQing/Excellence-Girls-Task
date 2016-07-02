'use strict';

function collect_all_even(collection) {

    var resultArray = [];
    collection.forEach(function (element) {
        if (element % 2 === 0) {

            resultArray.push(element);
        }
    });
    return resultArray;
}

module.exports = collect_all_even;
