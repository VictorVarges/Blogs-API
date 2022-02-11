const { getCategories } = require('../services/getCategories');

const STATUS_SUCCESS = 200;

const getAllCategories = async (req, res) => {
  const responseCategoriesDB = await getCategories();

  return res.status(STATUS_SUCCESS).json(responseCategoriesDB);
};

module.exports = { getAllCategories };