function exibirCadastro(cadastro) {
    return `
    Seu nome é ${cadastro.firstName} ${cadastro.lastName}
    sexo: ${cadastro.sexo}
    cpf: ${cadastro.cpf}

  `;
}
console.timeLog();
console.log(exibirCadastro({
    firstName: "Livia",
    lastName: "D. de Carvalho",
    sexo: "M",
    cpf: 12345678
}));
console.timeEnd();
