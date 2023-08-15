import { sum } from '../src/sum';

describe('Somar', () => {
  test('deve somar dois números', () => {
    expect(sum(2, 5)).toEqual(3);
  });
});