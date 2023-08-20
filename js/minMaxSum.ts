function minMaxSum(arr: number[]): void {
  let allNumbers: number[] = [];
  let min: number = 0;
  let max: number = 0;

  let calc1 = arr.slice(1).reduce((acc, index) => {
    return acc += index;
  });
  allNumbers.push(calc1);

  let calc2 = arr.reduce((acc, index) => {
    return acc += index;
  });

  allNumbers.push(calc2 - arr[1]);

  let calc3 = arr.reduce((acc, index) => {
    return acc += index;
  });

  allNumbers.push(calc3 - arr[2]);

  let calc4 = arr.reduce((acc, index) => {
    return acc += index;
  });

  allNumbers.push(calc4 - arr[3]);

  let calc5 = arr.reduce((acc, index) => {
    return acc += index;
  });

  allNumbers.push(calc5 - arr[4]);

  let i = 0;
  let valorMin = allNumbers[0];
  let valorMax = allNumbers[0];

  for (let numero of allNumbers) {

    if (valorMin > numero) {
      valorMin = numero
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