function diagonalDifference(arr) {
    var primaryDiagonal = 0;
    var secondaryDiagonal = 0;
    var valueAbsolute;
    var size = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
        primaryDiagonal += arr[i][i];
    }
    for (var j = 0; j < arr.length; j++) {
        secondaryDiagonal += arr[j][size - j];
    }
    valueAbsolute = primaryDiagonal - secondaryDiagonal;
    return Math.abs(valueAbsolute);
}
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
console.log(diagonalDifference([[-1, 1, -7, -8], [-10, -8, -5, -2], [0, 9, 7, -1], [4, 4, -2, 1]]));
