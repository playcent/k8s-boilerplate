import express from 'express';

const app = express();
const port = 3000;

app.get('/api/indra/', (req, res) => {
  console.log(req);
  res.send('Hello, World! V2');
});

app.listen(port, () => {
  console.log(`Server running att http://localhost:${port}`);
});
