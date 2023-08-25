function isNull(a: number, b: number): boolean {

  let answer: boolean = false;

  if (a + b !== null) {
    answer = true;
  }

  return answer;
};

export { isNull };