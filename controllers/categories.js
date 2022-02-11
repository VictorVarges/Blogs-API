const ServCategories = require('../services/categories');

const STATUS_OK = 201;

const createCategories = async (req, res) => {
  const { name } = req.body;
  const categoriesDB = await ServCategories.newCategories(name);
  console.log('oi', categoriesDB.code);

  if (categoriesDB.code) {
    return res.status(categoriesDB.code).json({ message: categoriesDB.message });
  }

  return res.status(STATUS_OK).json({ name: categoriesDB });
};

module.exports = { createCategories };