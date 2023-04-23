import express from 'express';

const app = express();
const port = 3000;

app.get('/api/indra/', (req, res) => {
  console.log(req);
  res.send('Indra V1');
});

app.listen(port, () => {
  console.log(`Server running att http://localhost:${port}`);
});
