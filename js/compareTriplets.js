function compareTriplets(a, b) {
    var alice = 0;
    var bob = 0;
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        }
        if (a[i] < b[i]) {
            bob++;
        }
        if (a[i] === b[i]) {
            alice += 0;
            bob += 0;
        }
    }
    result.push(alice, bob);
    return result;
}
compareTriplets([5, 6, 7], [3, 6, 10]);
