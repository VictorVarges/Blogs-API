const { newCategories } = require('../services/categories');

const STATUS_OK = 201;

const createCategories = async (req, res) => {
  const { name } = req.body;
  const categoriesDB = await newCategories(name);
  console.log(categoriesDB.message);

  if (categoriesDB.code) {
    return res.status(categoriesDB.code).json({ message: categoriesDB.message });
  }

  return res.status(STATUS_OK).json({ name });
};

module.exports = { createCategories };