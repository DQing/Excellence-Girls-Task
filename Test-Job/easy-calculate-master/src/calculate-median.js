function calculate_median(arr) {

    var numArray = [];
    for (var i = 1; i < arr.length; i += 2) {
        numArray.push(arr[i]);
    }
    var index;
    if (numArray.length % 2 !== 0) {
        index = Math.floor(numArray.length / 2);

        return numArray[index];
    }
    else {
        index = numArray.length / 2;

        return Math.floor((numArray[index] + numArray[index - 1]) / 2);
    }
}

module.exports = calculate_median;
