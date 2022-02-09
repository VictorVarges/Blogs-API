require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const { createUser } = require('./controllers/user');
const { createLogin } = require('./controllers/login');
const controllersGetUsers = require('./controllers/userGet');
const { tokenValidate } = require('./middlewares/userGet');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', createUser);
app.post('/login', createLogin);

app.get('/user', tokenValidate, controllersGetUsers.getUsers);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});