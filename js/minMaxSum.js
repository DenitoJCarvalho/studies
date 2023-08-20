function minMaxSum(arr) {
    var allNumbers = [];
    var min = 0;
    var max = 0;
    var calc1 = arr.slice(1).reduce(function (acc, index) {
        return acc += index;
    });
    allNumbers.push(calc1);
    var calc2 = arr.reduce(function (acc, index) {
        return acc += index;
    });
    allNumbers.push(calc2 - arr[1]);
    var calc3 = arr.reduce(function (acc, index) {
        return acc += index;
    });
    allNumbers.push(calc3 - arr[2]);
    var calc4 = arr.reduce(function (acc, index) {
        return acc += index;
    });
    allNumbers.push(calc4 - arr[3]);
    var calc5 = arr.reduce(function (acc, index) {
        return acc += index;
    });
    allNumbers.push(calc5 - arr[4]);
    var i = 0;
    var valorMin = allNumbers[0];
    var valorMax = allNumbers[0];
    for (var _i = 0, allNumbers_1 = allNumbers; _i < allNumbers_1.length; _i++) {
        var numero = allNumbers_1[_i];
        if (valorMin > numero) {
            valorMin = numero;
        }
        if (valorMax < numero) {
            valorMax = numero;
        }
    }
    min = valorMin;
    max = valorMax;
    console.log(min, max);
}
minMaxSum([1, 2, 3, 4, 5]);
