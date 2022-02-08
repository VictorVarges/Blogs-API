const UserService = require('../services/user');

const createUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  const responseValidations = await UserService.validations(displayName, email, password);

  if (responseValidations.code) {
    return res.status(responseValidations.code).json({ message: responseValidations.message });
  }
  return res.status(responseValidations.status).json({ token: responseValidations.message });
};

module.exports = {
  createUser,
};