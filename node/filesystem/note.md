
### unlink()
- recebe um path (caminho) como parâmetro e uma callback de retorno.
- Irá excluir o arquivo especificado na path.
  
```
unlink('tmp/arquivo.txt', (error) => {
  if(error) throw error.message;
  console.log('Arquivo deletado com sucesso.');
});

//Arquivo deletado com sucesso.
```

### appendFile()
- recebe um path como parâmetro. 
  - Aqui é onde o arquivo será inserido;
  - No final deve conter o nome do arquivo  mais a extensão.
- recebe uma descrição.
- um encodificador
- e uma callback de retorno.

```
let txt = `
  <p>Eu sou um arquivo html ...!</p>
`;

appendFile('../note/arquivo.html', txt, { encoding: 'utf-8' }, (error) => {
  if (error) throw error.message;
  console.log(`Arquivo inserido com sucesso...!`);
});

``` 

### open()
- recebe uma path como parâmetro.
- uma flag:
  - 'r': aberto somente para leitura;
  - 'w': aberto para escrita, caso exista conteúdo no arquivo será apagado;
  - 'a': abre para escrita, mas acrescenta dados ao final do arquivo;
  - 'x': cria um novo arquivo para escrita;
  - 'b': abre o arquivo para o modo binário.

```
open('../note/test.txt', 'a', (error, fd) => {
  if (error) throw error.message;
  console.log(`Arquivo aberto com sucesso. ${fd}`);
});

```

### readFile()
- recebe um path como parâmetro.
- um encodificador.
- um calback.
  
```
readFile('../note/arquivo.html', { encoding: 'utf-8' }, (error) => {
  if (error) throw error.message;

  console.log(`Arquivo lido com sucesso.`);
});

```