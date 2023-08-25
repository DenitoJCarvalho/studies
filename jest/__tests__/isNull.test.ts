import { isNull } from '../src/isNull';

describe('Verify if number is null', () => {
  test('2 + 2 no should be null.', () => {
    expect(isNull(2, 2)).not.toBeNull();
  });

  test('1 + 2 no should be null', () => {
    expect(isNull(1, 2)).not.toBeNull();
  });

  test('5 - 2 no should be null', () => {
    expect(isNull(5, 2)).not.toBeNull();
  });

  test('3 * 2 no should be null', () => {
    expect(isNull(3, 2)).not.toBeNull();
  });

  test('4 / 2 no should be null', () => {
    expect(isNull(4, 2)).not.toBeNull();
  });
});