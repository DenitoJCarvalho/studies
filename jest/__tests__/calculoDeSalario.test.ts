import { Funcionario } from '../src/calculoDeSalario';

describe('Calculando salário', () => {

  let employee = new Funcionario('Adrian', 1500, 1);
  let employee1 = new Funcionario('Carvalho', 4000, 1);
  let employee2 = new Funcionario('Dennis', 1500, 2);
  let employee3 = new Funcionario('Dennis', 2500, 2);
  let employee4 = new Funcionario('Dennis', 1500, 3);
  let employee5 = new Funcionario('Dennis', 2500, 3);

  test('deve retornar o salario de R$1350.00', () => {
    expect(employee.calcularSalario(employee.getSalario(), employee.getCargo())).toEqual(1350.00);
  });

  test('deve retornar o salário  de R$3200.00', () => {
    expect(employee1.calcularSalario(employee1.getSalario(), employee1.getCargo())).toEqual(3200.00);
  });

  test('deve retornar o salário de R$1275.00', () => {
    expect(employee2.calcularSalario(employee2.getSalario(), employee2.getCargo())).toEqual(1275.00);
  });

  test('deve retornar o salário de R$1875.00', () => {
    expect(employee3.calcularSalario(employee3.getSalario(), employee3.getCargo())).toEqual(1875.00);
  });

  test('deve retornar o salário de R$1275.00', () => {
    expect(employee4.calcularSalario(employee4.getSalario(), employee4.getCargo())).toEqual(1275.00);
  });

  test('deve retornar o salário de R$1875.00', () => {
    expect(employee5.calcularSalario(employee5.getSalario(), employee5.getCargo())).toEqual(1875.00);
  });
});