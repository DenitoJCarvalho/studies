
# Porque usamos o * e o template ?

Por trás dos panos o angular utiliza um template. No entanto, para não precisarmos escrever  a estrutura abaixo todo vez é feito um bind com o caracter "*".

```
  <template [ngIf]="mostrarItem">
    <div>Lista de cursos aqui.</div>
  </template>
```