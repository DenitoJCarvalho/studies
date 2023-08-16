import { sum } from '../src/sum';

describe('Somar', () => {
  test('deve falhar ao somar dois números', () => {
    expect(sum(2, 5)).toEqual(3);
  });
});

describe('Somar', () => {
  test('deve trazer o resultado correto ao somar dois números', () => {
    expect(sum(5, 5)).toEqual(10);
  });
});