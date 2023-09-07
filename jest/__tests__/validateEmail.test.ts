import { Email } from '../src/validateEmail';

describe('Verifica se um email é válido', () => {
  let email = new Email();

  test('deve passar um email que não tenha .br ao final.', () => {
    expect(email.validate('adrian@gmail.com')).toBe(true);
  });

  test('deve passar um email que tenha .br ao final', () => {
    expect(email.validate('adrian@email.com.br')).toBe(true);
  });

  test('deve passar um email que tenha um caracter especial no nome de usuario', () => {
    expect(email.validate('adrian-2@gmail.com')).toBe(true);
  });

  test('deve passar um email que tenha um "." dividindo o nome de usuário.', () => {
    expect(email.validate('adria.carvalho@gmail.com')).toBe(true);
  });

  test('deve passar um email que tenha um "-" dividindo o nome de usuário.', () => {
    expect(email.validate('adria-carvalho@gmail.com')).toBe(true);
  });

  test('deve passar um email que tenha um "_" dividindo o nome de usuário.', () => {
    expect(email.validate('adria_carvalho@gmail.com')).toBe(true);
  });
});
