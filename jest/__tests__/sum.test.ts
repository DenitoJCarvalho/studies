import { sum } from '../src/sum';

describe('Somar', () => {
  test('ao somar não deve dar o valor correto', () => {
    expect(sum(3, 5)).not.toEqual(10);
  });

  test('deve trazer o resultado correto ao somar dois números', () => {
    expect(sum(5, 5)).toEqual(10);
  });

  test('deve falhar ao somar dois números', () => {
    expect(sum(12, 2)).toEqual(10);
  })
});
