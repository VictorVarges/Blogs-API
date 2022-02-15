const { BlogPost, Category } = require('../models');
const { getUserByToken } = require('./user');

const categoryNotFound = {
  code: 400, message: '"categoryIds" not found',
};

const postBody = (title, content, categoryIds) => {
  if (!title) return { code: 400, message: '"title" is required' };
  if (categoryIds === undefined) return { code: 400, message: '"categoryIds" is required' };
  if (!content) return { code: 400, message: '"content" is required' };
  return true;
};

const getIdCategory = async (categoryIds) => {
  const checkCategory = await Promise.all(categoryIds.map(async (id) => {
    const getId = await Category.findOne({ where: { id } });
    if (!getId) return false;
    return true;
  }));
  console.log('getCat', checkCategory);
  if (!checkCategory.every((category) => category === true)) return false;
  return true;
};

const postValidate = async (title, content, categoryIds, authorization) => {
  const userId = await getUserByToken(authorization);
  console.log('uu', userId);
  const body = postBody(title, content, categoryIds);
  if (body !== true) return body;
  const invokeGetIdCategory = await getIdCategory(categoryIds);

  if (invokeGetIdCategory !== true) return categoryNotFound;
  console.log(4);

  const createPostDB = await BlogPost.create({ userId, title, content, categoryIds });
  console.log('juju', createPostDB);

  const { id } = createPostDB;

  const response = { id, userId, title, content };
  return response;
};

module.exports = { postValidate };