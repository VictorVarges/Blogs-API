require('dotenv').config();

const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT;

// **cria um token:
const createToken = (user) => {
  const token = jwt.sign({ data: user }, SECRET, {
    algorithm: 'HS256',
    expiresIn: '15d',
  });
  return token;
};

// **Posso visualizar os dados que foram transformados em token:
// const payload = jwt.decode(token, 'segredo');

// **Posso visualizar os dados que foram transformados em token:
// const payload = jwt.verify(token, 'segredo');

// **Verify VS decode:
// verify: verifica se o tokjen é válido de acordo com o segredo;
// decode: decodifca independente do segredo.

module.exports = {
  createToken,
};