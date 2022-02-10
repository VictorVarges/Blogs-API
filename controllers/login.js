const { validations } = require('../services/login');

const createLogin = async (req, res) => {
  const { email, password } = req.body;
  
  const responseLogin = await validations({ email, password });

  if (responseLogin.code) {
    return res.status(responseLogin.code).json({ message: responseLogin.message });
  }

  return res.status(responseLogin.status).json({ token: responseLogin.message });
};

module.exports = {
  createLogin,
};