import { Pessoa } from './classAbstract';

class Funcionario extends Pessoa {

  public job?: string;
  public salary?: number;

  constructor(nome: string, sobrenome: string, job: string, salary: number) {
    super(nome, sobrenome);

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.job = job;
    this.salary = salary;

  }

  public override fullName(): string {
    return `
      Nome: ${this.nome} ${this.sobrenome}
      Função: ${this.job}
      Salário: ${this.salary}
    `;
  }
}

const novo = new Funcionario('Adrian', 'Deni de Carvalho', 'Bagunçar', 5.00);

console.log(novo);