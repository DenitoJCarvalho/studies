import { Email } from '../src/validateEmail';

describe('Verifica se um email é válido', () => {
  let email = new Email();

  test('deve verificar se o email contem letras de a - z.', () => {
    expect(email.hasLetters('email')).toBe(true);
  });

  test('deve verificar se o email contem numeros', () => {
    expect(email.hasNumbers('email2')).toBe(true);
  });

  test('deve verificar se há caracteres especiais', () => {
    expect(email.hasSpecialCharacters('email-2')).toBe(true);
    expect(email.hasSpecialCharacters('email!2')).toBe(true);
    expect(email.hasSpecialCharacters('email#2')).toBe(true);
    expect(email.hasSpecialCharacters('email%2')).toBe(true);
    expect(email.hasSpecialCharacters('email&2')).toBe(true);
    expect(email.hasSpecialCharacters('email_2')).toBe(true);
    expect(email.hasSpecialCharacters('email.2')).toBe(true);
  });

  test('deve verificar se contem um simbolo @', () => {
    expect(email.hasSymbolSign('email@')).toBe(true);
    expect(email.hasSymbolSign('email')).toBe(false);
  });

  test('deve verificar se o primeiro caracter é uma letra', () => {
    expect(email.firstCharacterIsLetter('email@')).toBe(true);
    expect(email.firstCharacterIsLetter('1mail@')).toBe(false);
    expect(email.firstCharacterIsLetter('.mail@')).toBe(false);
  });

  test('deve verificar se há dois pontos consecutivos ou caracteres especiais', () => {
    expect(email.hasTwoPoints('email..@')).toBe(false);
  });
});
