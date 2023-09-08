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
    expect(email.validate('adrian.carvalho@gmail.com')).toBe(true);
  });

  test('deve passar um email que tenha um "-" dividindo o nome de usuário.', () => {
    expect(email.validate('adrian-carvalho@gmail.com')).toBe(true);
  });

  test('deve passar um email que tenha um "_" dividindo o nome de usuário.', () => {
    expect(email.validate('adrian_carvalho@gmail.com')).toBe(true);
  });

  test('deve retornar falso ao ter um caracter especial no início do nome de usuário.', () => {
    expect(email.validate('.adrian@gmail.com')).toBe(false);
  });

  test('deve retornar falso ao ter dois caracteres especiais seguidos.', () => {
    expect(email.validate('adrian..123@gmail.com')).toBe(false);
  });

  test('deve retornar falso ao ter um caracter especial no final do nome de usuário.', () => {
    expect(email.validate('adrian.#@gmail.com')).toBe(false);
  });

  test('deve retornar verdadeiro ao ter um caracter especial dividindo o dominio.', () => {
    expect(email.validate('adrian@email-provider.com.br')).toBe(true);
  });

  test('deve retornar verdadeiro ao ter um caracter especial dividindo o nome e de usuário e outro o provider', () => {
    expect(email.validate('email.100@email-provider.com.br')).toBe(true);
  });
});
