const { BlogPost, User, Category } = require('../models');

const getAllPosts = (async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
      },
      {
        model: Category,
        as: 'categories',
        through: {
          attributes: [

          ],
        },
      },
    ],
  });
  console.log('lalau', posts);
  return posts;
});

module.exports = { getAllPosts };