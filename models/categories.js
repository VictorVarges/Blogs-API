const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return categories;
};

module.exports = Categories;