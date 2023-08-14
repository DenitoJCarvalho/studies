function plusMinus(arr) {
    var positives = 0;
    var negatives = 0;
    var zeros = 0;
    arr.filter(function (n) {
        if (n > 0) {
            positives++;
        }
        if (n < 0) {
            negatives++;
        }
        if (n === 0) {
            zeros++;
        }
    });
    console.log((positives / arr.length).toFixed(6));
    console.log((negatives / arr.length).toFixed(6));
    console.log((zeros / arr.length).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);
plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
