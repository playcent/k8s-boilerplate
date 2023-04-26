import express from 'express';

const app = express();
const port = 3010;

app.get('/api/zetsu/', (req, res) => {
  console.log(req);
  res.send('Zetsu V1');
});

app.listen(port, () => {
  console.log(`Server running att http://localhost:${port}`);
});
