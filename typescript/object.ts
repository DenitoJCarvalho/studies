let umObjeto = {
  nome: 'Arian',
  tipo: 'filho'
}

interface Filho {
  nome: string,
  age: number
}

type Jogos = {
  nome: string,
  classificacao: string
}

function qualEOSeufilho(filho: Filho) {
  return `Eu sou o ${filho.nome} e tenho ${filho.age}`;
}

function qualEOJogo(jogo: Jogos) {
  return `
    Jogo escolhido: ${jogo.nome}
    Classificação: ${jogo.classificacao}
  `;
}

console.timeLog();
console.log(qualEOSeufilho({ nome: "Adrian", age: 2 }));

console.timeLog(qualEOJogo({ nome: "Xadrez", classificacao: "pensamento" }));
console.log(qualEOJogo({ nome: "Xadrez", classificacao: "pensamento" }));