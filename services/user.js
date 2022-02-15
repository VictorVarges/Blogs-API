const { createToken, verifyToken } = require('../helpers/createToken');
const { User } = require('../models');

const EMAIL_VALIDATION = /\S+@\S+\.\S+/;

const displayNameValidate = (displayName) => {
  if (displayName.length < 8) {
    return {
      code: 400, message: '"displayName" length must be at least 8 characters long',
    };
  }
};

const emailValidate = async (email) => {
  if (!email) return { code: 400, message: '"email" is required' };

  if (!EMAIL_VALIDATION.test(email)) return { code: 400, message: '"email" must be a valid email' };

  const [dataUser] = await User.findAll({ where: { email } });
  if (dataUser) return { code: 409, message: 'User already registered' };
};

const getUserByToken = async (token) => {
  if (!token) return false;
  const { data } = verifyToken(token);
  const { email } = data;
  const user = await User.findOne({ where: { email } });
  console.log('user >>>>>>>>>>', user.dataValues.id);
  return user.dataValues.id;
};

const passwordValidate = (password) => {
  if (!password) return { code: 400, message: '"password" is required' };

  if (password.length !== 6) {
    return {
      code: 400, message: '"password" length must be 6 characters long',
    };
  }
};

const validations = async (displayName, email, password) => {
  const invokeDisplayName = displayNameValidate(displayName);
  const invokeEmail = await emailValidate(email);
  const invokePassword = passwordValidate(password);

  if (invokeDisplayName) return invokeDisplayName;
  if (invokeEmail) return invokeEmail;
  if (invokePassword) return invokePassword;

  const token = createToken({ displayName, email, password });
  await User.create({ displayName, email, password });

  return { status: 201, message: token };
};

module.exports = {
  validations,
  getUserByToken,
};