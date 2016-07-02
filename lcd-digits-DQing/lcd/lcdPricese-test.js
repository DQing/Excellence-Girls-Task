/**
 * Created by douqing on 16-4-23.
 */
describe('lcdPricese', function() {
    var input;
    beforeEach(function() {
        input=910;
    });

    it('getNumberArray should output correct text',function () {
        var lcdNumbers=loadDigits();
        spyOn(console,"log");
        getNumberArray(input.toString(),lcdNumbers);
        var expectText = [
            ['._.','|_|','..|'],
            ['...','..|','..|'],
            ['._.','|.|','|_|']
        ];
        expect(console.log).toHaveBeenCalledWith(expectText);
    });

    it('drawingPattern should output correct text',function () {
        var numberArray = [
            ['._.','|_|','..|'],
            ['...','..|','..|'],
            ['._.','|.|','|_|']
        ];
        spyOn(console,"log");
        drawingPattern(numberArray);
        var expectText= [['._.','|_|','..|'],
            ['...','..|','..|'],
            ['._.','|.|','|_|']];
        expect(console.log).toHaveBeenCalledWith(expectText);

    });

    it('should print correct text', function() {

        spyOn(console, 'log');

        printText(input);

        var expectText ='._.'+'...'+'._.'+'\n'+
                        '|_|'+'..|'+'|.|'+'\n'+
                        '..|'+'..|'+'|_|'+'\n';


        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
