'use strict';

function thousands_separators(num) {

    var stringNum = num.toString();
    var result = '';
    var intLength = Math.floor(num).toString().length;
    var strLength = stringNum.length;
    var re = Math.floor((intLength - 1) / 3);
    if (re === 0) {
        result = stringNum;
    }
    else if (re === 1) {
        result = stringNum.substring(0, intLength - 3) + ',' + stringNum.substring(intLength - 3, strLength);
    }
    else if (re === 2) {
        result = stringNum.substring(0, intLength - 6) + ',' + stringNum.substring(intLength - 6, intLength - 3) + ',' + stringNum.substring(intLength - 3, strLength);
    }

    return result;

}
module.exports = thousands_separators;
