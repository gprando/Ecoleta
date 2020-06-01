import express from 'express';
import { json } from 'body-parser';

const app = express();

app.use(json())

app.get('/users', (req, res) => {
  const user = {
    name: 'gabriel',
    idade: 22,
  }
  console.log('listagem de usuários')
  return res.json(user);
});

app.listen(3333);