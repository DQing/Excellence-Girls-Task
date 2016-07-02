var loadlcd = require('../main/lcd-number.js');

function main() {

    var lcdNumbers = loadlcd.lcdnum();

    var inputs = 910;

    var numberStrings = inputs.toString();

    var numberArray = getNumberArray(numberStrings, lcdNumbers);

    var pattern = drawingPattern(numberArray);

    console.log(pattern);
}

function getNumberArray(numberStrings, lcdNumbers) {

    var numberArray = [];

    for (var i = 0; i < numberStrings.length; i++) {

        var numberString = numberStrings.charAt(i);

        var lcdNumber = isExist(numberString, lcdNumbers);

        numberArray.push(lcdNumber);

    }

    return numberArray;
}

function isExist(numberString, lcdNumbers) {
    var lcdNumber;
    for (var i = 0; i < lcdNumbers.length; i++) {
        if (numberString === lcdNumbers[i].item) {
            lcdNumber = lcdNumbers[i].part;
        }
    }

    return lcdNumber;

}

function drawingPattern(numberArray) {

    var pattern = '';

    for (var k = 0; k < 3; k++) {

        for (var i = 0; i < numberArray.length; i++) {

            pattern += numberArray[i][k];

        }

        pattern += '\n';
    }

    return pattern;
}
module.exports = {
    getNumberArray: getNumberArray,
    drawingPattern: drawingPattern,
    main: main
};