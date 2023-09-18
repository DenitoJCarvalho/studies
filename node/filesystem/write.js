import { writeFile } from 'node:fs';

writeFile('../note/writeFile.txt', 'É apenas um teste ...', (error) => {
  if (error) throw error.message;

  console.log('Novo arquivo...');
});