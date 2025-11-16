import express from 'express';
import type { Request, Response } from 'express';
import path, { } from 'node:path';
import { } from 'node:fs';

const app = express();

app.get('/', (request: Request, response: Response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});
 
app.listen(3000, () => { 
  console.log("App listenning on port 3000!");
})
