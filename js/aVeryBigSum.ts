function aVeryBigSum(ar: number[]): number {
  let total;

  ar.reduce((acc, cv) => {
    return total = acc + cv;
  });

  return total;
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);