import express from 'express';
import multer from 'multer';
import { extname } from 'path';

import { normalizePort } from '../server/server.js';
import { env } from '../environment/env.js';


const app = express();
const port = normalizePort(env.PORT_TEST || '9090');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    const path = `${Date.now()}_10_`;
    cb(null, 'REF' + path + extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

app.use(express.json());

app.post('/arquivo', upload.single('file'), async (request, response) => {
  try {
    const arq = await request.file;

    response.status(200).json({
      path: `${arq.path}`,
      message: `Arquivo salvo com sucesso.`
    });
  } catch (e) {
    if (e instanceof Error) {
      response.status(500).json({
        message: `${e.message}`
      });
    }
  }
});

app.listen(port, (e) => {
  if (e instanceof Error) {
    throw new Error(`Erro: ${e.message}`)
  }

  console.log(`Server is running in port ${port}`);
});