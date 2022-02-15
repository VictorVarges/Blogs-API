const { postValidate } = require('../services/post');

const createPosts = async (req, res) => {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const responsePostDB = await postValidate(title, content, categoryIds, authorization);
  console.log('resPosyDB', responsePostDB);

  if (responsePostDB.code) {
    return res.status(responsePostDB.code).json({ message: responsePostDB.message });
  }

  return res.status(201).json(responsePostDB);
};

module.exports = { createPosts };