const express = require('express');
const bodyParser = require('body-parser');

const UserController = require('./controllers/user');
const loginController = require('./controllers/login');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', UserController.createUser);
app.post('/login', loginController.createLogin);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
// app.listen(process.env.PORT, () => {
//   console.log(`Escutando na porta ${process.env.PORT}`);
// });