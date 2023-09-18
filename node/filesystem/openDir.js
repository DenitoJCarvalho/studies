import { opendir } from 'node:fs';

opendir('../note', (error, dir) => {
  if (error) throw error;

  dir.read()
    .then(d => {
      console.log(d.name, d.path);
    }).catch(error => {
      console.error(error);
    });
});