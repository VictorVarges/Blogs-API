const { newCategories } = require('../services/categories');

const createCategories = async (req, res) => {
  const { name } = req.body;
  const categoriesDB = await newCategories(name);

  if (categoriesDB) return res.status(categoriesDB.code).json({ message: categoriesDB.message });

  return res.status(categoriesDB.status).json({ message: categoriesDB.message });
};

module.exports = { createCategories };