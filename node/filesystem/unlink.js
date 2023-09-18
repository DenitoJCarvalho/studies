import { unlink } from 'node:fs';

//metodo unlink desvincula, desliga, exclui um arquivo dentro do path especificado.
unlink('../note/paraSerExcluido.txt', (err) => {
  if (err) throw err.message;

  console.log(`Arquivo deletado com sucesso...!`);
});

