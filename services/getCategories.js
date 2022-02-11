const { Category } = require('../models');

const getCategories = async () => {
  const categoriesDB = await Category.findAll();

  return categoriesDB;
};

module.exports = { getCategories };