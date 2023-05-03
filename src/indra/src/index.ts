import express from 'express';

const app = express();
const port = 3000;

app.use((req, _res, next) => {
  console.log('Request received at: ', Date.now(), req.url);
  next();
});

app.get('/api/indra/', (_req, res) => {
  res.send('Indra V1');
});

app.listen(port, () => {
  console.log(`Server running att http://localhost:${port}`);
});
