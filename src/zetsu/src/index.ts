import express from 'express';
import connectDB from './database';
import { healthRouter } from './routes/api/health';

const app = express();
const port = 3010;

connectDB();

app.use((req, _res, next) => {
  console.log('Request received at: ', Date.now(), req.url);
  next();
});

app.use(healthRouter);

app.get('/api/zetsu/', (_req, res) => {
  res.send('Zetsu V1');
});

app.listen(port, () => {
  console.log(`Server running att http://localhost:${port}`);
});
