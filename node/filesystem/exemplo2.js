import { appendFile } from 'node:fs';

let txt = `
  <p>Eu sou um arquivo html ...!</p>
`;

appendFile('../note/arquivo.html', txt, { encoding: 'utf-8' }, (error) => {
  if (error) throw error.message;
  console.log(`Arquivo inserido com sucesso...!`);
});

