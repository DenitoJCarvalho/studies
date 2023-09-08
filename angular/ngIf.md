# *NgIf

Funciona como as condicionais que conhecemos em outras linguagens, retornando verdadeiro ou falso e aplicando nossa lógica.

```
  @Component({
    selector: 'app-diretiva-ngif',
    templateUrl: './',
    styleUrls: ['./']
  })

  export classDiretivaNgIfComponent implements OnInit {

    cursos: string[] = [];

    constructor() {}

    ngOnInit() {}
  }
```

```
  <h5>*NgIf</h5>
  <p>{{ cursos }}</p>
```

Essa condicional só retorna uma lista de cursos se houver algo.
```
  <div *ngIf="cursos.length > 0">
    curso.
  </div>

  <div *ngIf="cursos.length == 0">
    Não existem cursos para serem listados.
  </div>
```

O ngIf é recomendado para árvore de elemntos grandes.