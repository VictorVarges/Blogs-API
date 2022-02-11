const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return categories;
};

module.exports = Categories;