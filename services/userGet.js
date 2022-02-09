const { User } = require('../models');

const getUser = async () => {
  const getAll = await User.findAll();
  
  return getAll;
};

module.exports = { getUser };