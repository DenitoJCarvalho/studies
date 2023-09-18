interface Nome {
  firstName: string,
  lastName: string
}

interface Cadastro extends Nome {
  sexo: string,
  cpf: number
}

function exibirCadastro(cadastro: Cadastro) {
  return `
    Seu nome é ${cadastro.firstName} ${cadastro.lastName}
    sexo: ${cadastro.sexo}
    cpf: ${cadastro.cpf}

  `;
}

console.log(exibirCadastro({
  firstName: "Livia",
  lastName: "D. de Carvalho",
  sexo: "M",
  cpf: 12345678
}));
