import { readFile } from 'node:fs';

readFile('../note/arquivo.html', { encoding: 'utf-8' }, (error) => {
  if (error) throw error.message;

  console.log(`Arquivo lido com sucesso.`);
});