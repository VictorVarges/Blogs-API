const { Category } = require('../models');

const nameValidate = (name) => {
  if (!name) return { code: 400, message: '"name" is required' };
  return name;
};

const newCategories = async (name) => {
  const invokeNameValidate = nameValidate(name);
  if (invokeNameValidate) return invokeNameValidate;

  const createCategory = await Category.create({ name });
  return createCategory;
};

module.exports = { newCategories };