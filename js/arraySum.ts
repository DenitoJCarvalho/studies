function simpleArraySum(ar: number[]): number {
  let total: number = 0;

  for (let i = 0; i < ar.length; i++) {
    total += ar[i];
  }

  return total;
}

simpleArraySum([1, 2, 3]);

console.log(simpleArraySum([1, 2, 3]));
