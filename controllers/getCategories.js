const { getCategories } = require('../services/getCategories');

const STATUS_SUCCESS = 200;

const getAllCategories = async (req, res) => {
  const { name } = req.body;
  const responseCategoriesDB = await getCategories({ name });

  return res.status(STATUS_SUCCESS).json(responseCategoriesDB);
};

module.exports = { getAllCategories };