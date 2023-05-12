import express from 'express';
import logger from './lib/logger';

const app = express();
const port = 3000;

app.get('/api/indra/', (_req, res) => {
  logger.debug('debug info');
  res.send('Indra V1');
});

app.listen(port, () => {
  logger.info(`Server running att http://localhost:${port}`);
});
