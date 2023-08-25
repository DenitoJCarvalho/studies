function compare(
  a: number | string,
  b: number | string): any {

  if (a >= b) return a;
  if (a < b) return a;
};

export { compare };