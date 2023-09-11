
export class Funcionario {

  private nome: string;
  private salario: number;
  private cargo: Cargo;

  constructor(
    nome: string,
    salario: number,
    cargo: Cargo
  ) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  public getNome(): string {
    return this.nome;
  }

  public getSalario(): number {
    return this.salario;
  }

  public getCargo(): Cargo {
    return this.cargo;
  }

  public calcularSalario(salario: number, cargo: Cargo): number {

    if (salario < 3000.00 && cargo === 1) {
      this.salario = salario - (salario * 0.10);
    }

    if (salario >= 3000.00 && cargo === 1) {
      this.salario = salario - (salario * 0.20)
    }

    if (salario < 2500.00 && cargo === 2
      || salario < 2500.00 && cargo === 3
    ) {
      this.salario = salario - (salario * 0.15);
    }

    if (salario >= 2500 && cargo == 2
      || salario >= 2500.00 && cargo === 3
    ) {
      this.salario = salario - (salario * 0.25);
    }

    return this.getSalario();
  }
};

enum Cargo {
  Desenvolvedor = 1,
  DBA = 2,
  Testador = 3
};