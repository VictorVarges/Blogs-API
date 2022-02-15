const Post = (sequelize, DataTypes) => {
  const post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  post.associate = (models) => {
    post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return post;
};

module.exports = Post;