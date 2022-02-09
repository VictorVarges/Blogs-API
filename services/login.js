const { Login, User } = require('../models');
const { createToken } = require('../helpers/createToken');

const emailValidate = async (email) => {
  if (email === undefined) return { code: 400, message: '"email" is required' };

  if (email.length === 0) return { code: 400, message: '"email" is not allowed to be empty' };

  const dataLogin = await User.findOne({ where: { email } });
  if (!dataLogin) return { code: 400, message: 'Invalid fields' };
};

const passwordValidate = (password) => {
  if (password === undefined) return { code: 400, message: '"password" is required' };

  if (password.length === 0) return { code: 400, message: '"password" is not allowed to be empty' };
};

const validations = async ({ email, password }) => {
  const invokeEmail = await emailValidate(email);
  const invokePassword = passwordValidate(password);

  if (invokeEmail) return invokeEmail;
  if (invokePassword) return invokePassword;

  const token = createToken({ email, password });
  await Login.create({ email, password });

  return { status: 200, message: token };
};

module.exports = {
  validations,
};