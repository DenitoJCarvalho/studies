function simpleArraySum(ar) {
    var total = 0;
    for (var i = 0; i < ar.length; i++) {
        total += ar[i];
    }
    return total;
}
simpleArraySum([1, 2, 3]);
console.log(simpleArraySum([1, 2, 3]));
