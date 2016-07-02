var lcd = require('../main/node-lcd.js');
var num = require('../main/lcd-number.js');

describe('unit test', function () {

    it('getNumberArray function test', function () {

        var input = '910'

        var numberArray = lcd.getNumberArray(input, num.lcdnum());

        var expectText = [
            ['._.', '|_|', '..|'],
            ['...', '..|', '..|'],
            ['._.', '|.|', '|_|']
        ];

        expect(numberArray).toEqual(expectText);

    });

    it('drawingPattern function test', function () {

        var numberArray = [
            ['._.', '|_|', '..|'],
            ['...', '..|', '..|'],
            ['._.', '|.|', '|_|']
        ];

        var pattern = lcd.drawingPattern(numberArray);

        var expectText = '._.' + '...' + '._.' + '\n' +
            '|_|' + '..|' + '|.|' + '\n' +
            '..|' + '..|' + '|_|' + '\n';

        expect(pattern).toEqual(expectText);

    });

});

describe('Integration Testing',function () {

    it('main function test',function () {

        spyOn(console, 'log');

        lcd.main();

        var expectText ='._.'+'...'+'._.'+'\n'+
            '|_|'+'..|'+'|.|'+'\n'+
            '..|'+'..|'+'|_|'+'\n';


        expect(console.log).toHaveBeenCalledWith(expectText)
    });
});