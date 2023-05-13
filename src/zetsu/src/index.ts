import express from 'express';
import connectDB from './database';
import { healthRouter } from './routes/api/health';
import morganMiddleware from './middleware/http-log';
import logger from './lib/logger';

const app = express();
const port = 3010;

connectDB();
app.use(morganMiddleware);
app.use('/health', healthRouter);

app.get('/api/zetsu/', (_req, res) => {
  logger.debug('debug info');
  res.send('Zetsu V1');
});

app.listen(port, () => {
  logger.info(`Server running at http://localhost:${port}`);
});
