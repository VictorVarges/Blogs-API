const { verifyToken } = require('../helpers/createToken');
const { User } = require('../models');

const getUser = async (displayName, email, password, image) => {
  const token = verifyToken({ displayName, email, password, image });
  await User.findAll();

  return { status: 200, message: token };
};

module.exports = { getUser };