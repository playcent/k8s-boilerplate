import express from 'express';
import connectDB from './database';
import { healthRouter } from './routes/api/health';
import { morganMiddleware, logger, errorHandler, DatabaseConnectionError } from '@cashoco/common';

const app = express();
const port = 3010;

connectDB();
app.use(morganMiddleware);
app.use('/health', healthRouter);

app.get('/api/zetsu/', (req, res) => {
  logger.debug('debug info');
  res.send('Zetsu V1');
});

app.get('/api/zetsu/error/', (req, res) => {
  logger.error('database error');
  throw new DatabaseConnectionError();
});

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server running at http://localhost:${port}`);
});
