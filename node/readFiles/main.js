import express from 'express';

import { normalizePort } from '../server/server.js';
import { env } from '../environment/env.js';


const app = express();
const port = normalizePort(env.PORT_TEST || '7575');


app.listen(port, (e) => {
  if (e instanceof Error) {
    throw new Error(`Erro: ${e.message}`)
  }

  console.log(`Server is running in port ${port}`);
});