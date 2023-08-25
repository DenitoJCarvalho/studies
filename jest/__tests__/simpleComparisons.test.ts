import { compare } from '../src/compare';

describe('Should compare some values.', () => {
  test('2 should to be greater than 1', () => {
    expect(compare(2, 1)).toBeGreaterThan(1);
  });

  test('2 should to be greater or equal 1', () => {
    expect(compare(2, 1)).toBeGreaterThanOrEqual(1)
  });

  test('2 should to be greater or equal 2', () => {
    expect(compare(2, 2)).toBeGreaterThanOrEqual(1)
  });

  test('2 should to be less than 3', () => {
    expect(compare(2, 3)).toBeLessThan(3)
  });

  test('2 should to be less or equal 3', () => {
    expect(compare(2, 3)).toBeLessThanOrEqual(3)
  });

  test('3 should to be less or equal 3', () => {
    expect(compare(3, 3)).toBeLessThanOrEqual(3)
  });


});