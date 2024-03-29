const { getUser } = require('../services/userGet');

const STATUS_SUCCESS = 200;

const getUsers = async (req, res) => {
  const responseDB = await getUser();

  return res.status(STATUS_SUCCESS).json(responseDB);
};

module.exports = { getUsers };