function pesquisaBinaria(lista, item) {
    var baixo = 0;
    var alto = lista.length - 1;
    while (baixo <= alto) {
        var meio = (baixo + alto) / 2;
        var chute = lista[meio];
        if (chute == item) {
            return meio;
        }
        else if (chute > item) {
            alto = meio;
        }
        else {
            baixo = meio + 1;
        }
    }
}
var minhaLista = [1, 3, 5, 7, 9];
console.log(pesquisaBinaria(minhaLista, 3));
console.log(pesquisaBinaria(minhaLista, -1));
