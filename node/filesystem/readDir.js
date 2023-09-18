import { readdir, rmdir } from 'node:fs';

readdir('../note/', { encoding: 'utf8', recursive: true }, (error, files) => {
  if (error) throw error.message;

  console.log(files);

});

rmdir('../note/note2', (error) => {
  if (error) throw error.message;

  console.log(`Diretório excluído com sucesso...`);
});