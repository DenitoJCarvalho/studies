function staircase(n) {
  let stair = "#";
  let spaces = " ";

  for (let i = 1; i <= n; i++) {
    console.log(`${spaces.repeat(n - i)}${stair.repeat(i)}`);

  }
}
staircase(6);
