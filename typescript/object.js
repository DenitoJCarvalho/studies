let umObjeto = {
    nome: 'Arian',
    tipo: 'filho'
};
function qualEOSeufilho(filho) {
    return `Eu sou o ${filho.nome} e tenho ${filho.age}`;
}
function qualEOJogo(jogo) {
    return `
    Jogo escolhido: ${jogo.nome}
    Classificação: ${jogo.classificacao}
  `;
}
console.timeLog();
console.log(qualEOSeufilho({ nome: "Adrian", age: 2 }));
console.timeLog(qualEOJogo({ nome: "Xadrez", classificacao: "pensamento" }));
console.log(qualEOJogo({ nome: "Xadrez", classificacao: "pensamento" }));
