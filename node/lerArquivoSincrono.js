import { readFileSync } from 'node:fs';

let fileContent;

const someMath = 1 + 1;

try {
  fileContent = readFileSync('./note/test.txt', 'utf-8');

  console.time();
  console.log('file has been read.');
  console.timeEnd();
} catch (e) {
  console.log(e);
}

const text = `A soma é ${someMath}`;
console.log(text);