import { less } from '../src/less';

describe('Subtrair', () => {

  test('a - b deve ser 7', () => {
    expect(less(10, 3)).toEqual(7);
  });

  test('a - b não deve ser 7', () => {
    expect(less(10, 3)).not.toEqual(10);
  });

  test('a - b deve falhar', () => {
    expect(less(10, 3)).toEqual(21);
  });

})