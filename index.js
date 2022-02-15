const express = require('express');
const bodyParser = require('body-parser');

const { createUser } = require('./controllers/user');
const { createLogin } = require('./controllers/login');
const { getUsers } = require('./controllers/userGet');
const { tokenValidate } = require('./middlewares/errToken');
const { userById } = require('./controllers/userId');
const { createCategories } = require('./controllers/categories');
const { getAllCategories } = require('./controllers/getCategories');
const { createPosts } = require('./controllers/post');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', createUser);
app.post('/login', createLogin);

app.get('/user/:id', tokenValidate, userById);
app.get('/user', tokenValidate, getUsers);

app.post('/categories', tokenValidate, createCategories);
app.get('/categories', tokenValidate, getAllCategories);

app.post('/post', tokenValidate, createPosts);
// app.get('/post', tokenValidate, getPosts);

app.listen(3000, () => console.log('ouvindo porta 3000!'));