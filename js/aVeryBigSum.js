function aVeryBigSum(ar) {
    var total;
    ar.reduce(function (acc, cv) {
        return total = acc + cv;
    });
    return total;
}
aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
