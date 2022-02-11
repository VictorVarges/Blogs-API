const { createToken } = require('../helpers/createToken');
const { Category } = require('../models');

const nameValidate = (name) => {
  console.log({ name });
  if (!name) return { code: 400, message: '"name" is required' };
  return name;
};

const newCategories = async (name) => {
  const invokeNameValidate = nameValidate(name);
  console.log({ invokeNameValidate });
  if (invokeNameValidate) return invokeNameValidate;

  const token = createToken({ name });
  await Category.create({ name });
  return { status: 201, message: token };
};

module.exports = { newCategories };