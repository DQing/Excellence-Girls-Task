'use strict';

function fibonacci_series(n) {

    var fibonacciArray = [0, 1];
    if (n === 1) {
        return fibonacciArray;
    }
    else {
        for (var i = 0; i < n - 1; i++) {

            fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i + 1]);
        }

        return fibonacciArray;
    }
}
module.exports = fibonacci_series;
