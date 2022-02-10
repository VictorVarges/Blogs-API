const { userId } = require('../services/userId');

const STATUS_SUCCESS = 200;

const userById = async (req, res) => {
  const { id } = req.params;
  const byId = await userId(id);
  console.log({ byId });

  if (byId.code) return res.status(byId.code).json({ message: byId.message });

  return res.status(STATUS_SUCCESS).json(byId);
};

module.exports = { userById };