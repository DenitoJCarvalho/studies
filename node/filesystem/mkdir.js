import { mkdir } from 'node:fs';

mkdir('../note/note2/', { recursive: true }, (error) => {
  if (error) throw error.message;

  console.log('Criado novo diretório...');
});