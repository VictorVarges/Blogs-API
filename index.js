const express = require('express');
const bodyParser = require('body-parser');

const { createUser } = require('./controllers/user');
const { createLogin } = require('./controllers/login');
const { getUsers } = require('./controllers/userGet');
const { tokenValidate } = require('./middlewares/errToken');
const { userById } = require('./controllers/userId');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/login', createLogin);

app.post('/user', createUser);
app.get('/user/:id', userById, tokenValidate); 
app.get('/user', getUsers, tokenValidate);

app.listen(3000, () => console.log('ouvindo porta 3000!'));