const { createToken } = require('../helpers/createToken');
const { Categorie } = require('../models');

const nameValidate = (name) => {
  if (!name) return { code: 400, message: '"name" is required' };
};

const newCategories = async (name) => {
  const invokeNameValidate = nameValidate(name);
  if (invokeNameValidate) return invokeNameValidate;

  const token = createToken(name);
  await Categorie.create(token);

  return { status: 201, message: token };
};

module.exports = { newCategories };