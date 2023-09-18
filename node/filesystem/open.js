
import { open } from 'node:fs';

open('../note/test.txt', 'a', (error, fd) => {
  if (error) throw error.message;
  console.log(`Arquivo aberto com sucesso. ${fd}`);
});