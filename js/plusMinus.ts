function plusMinus(arr: number[]): void {
  let positives: number = 0;
  let negatives: number = 0;
  let zeros: number = 0;

  arr.filter(n => {
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