# *NGFOR

Funciona como uma estrutura de laço de repetição igual conhecemos nas linguagens de programação.

EX:

```
  <li *ngFor="let curso of listaDeCursos">
    {{ curso }}
  </li>
```

É possível declarar o índice também.

```
  <li *ngFor="let curso of listaDeCursos, let i = index">
    {{ curso }}
  </li>
```