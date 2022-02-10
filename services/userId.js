const { User } = require('../models');

const userId = async (id) => {
  const userById = await User.findByPk(id);

  if (!userById) return { code: 404, message: 'User does not exist' };

  return userById;
};

module.exports = { userId };