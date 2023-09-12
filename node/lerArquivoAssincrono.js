import { readFile } from 'node:fs';

let fileContent;
const someMath = 1 + 1;


try {
  fileContent = readFile('./note/test.txt', 'utf-8', (err, content) => {
    if (err) console.log(err);

    console.time();
    console.log(content);
    console.timeEnd();
  });
} catch (e) {
  console.log(e);
}

const text = `A soma é ${someMath}`;
console.log(text);
