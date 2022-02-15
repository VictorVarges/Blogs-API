const { getAllPosts } = require('../services/getPost');

const getPosts = async (req, res) => {
const blogPost = await getAllPosts();

return res.status(200).json(blogPost);
};

module.exports = { getPosts };