
function pesquisaBinaria(lista: number[], item) {
  let baixo: number = 0;
  let alto: number = lista.length - 1;

  while (baixo <= alto) {
    let meio = (baixo + alto) / 2;
    let chute = lista[meio];

    if (chute == item) {
      return meio;
    } else if (chute > item) {
      alto = meio
    } else {
      baixo = meio + 1;
    }
  }
}

let minhaLista = [1, 3, 5, 7, 9];

console.log(pesquisaBinaria(minhaLista, 3));
console.log(pesquisaBinaria(minhaLista, -1));