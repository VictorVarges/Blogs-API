const { getUser } = require('../services/userGet');

const getUsers = async (req, res) => {
  // const verifyToken = req.headers.authorization;
  const responseDB = await getUser();

  return res.status(responseDB.status).json(responseDB.message);
  // return res.status(201).json(responseDB);
};

module.exports = { getUsers };