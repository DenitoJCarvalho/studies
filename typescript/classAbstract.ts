abstract class Pessoa {

  //Attributes
  public nome: string;
  public sobrenome: string;
  public age?: number;

  //Constructor Method
  constructor(
    nome: string,
    sobrenome: string,
    age?: number
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.age = age;
  }

  //Methods
  abstract fullName(): string;
}

export { Pessoa }
