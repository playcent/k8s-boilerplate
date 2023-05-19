import express from 'express';
import { morganMiddleware, logger, errorHandler, DatabaseConnectionError } from '@cashoco/common';

const app = express();
const port = 3000;

app.use(morganMiddleware);

app.get('/api/indra/', (req, res) => {
  logger.debug('debug info');
  res.send('Indra V1');
});

app.get('/api/indra/error/', (req, res) => {
  logger.error('database error');
  throw new DatabaseConnectionError();
});

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server running att http://localhost:${port}`);
});
