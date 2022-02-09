const Login = (sequelize, DataTypes) => {
  const login = sequelize.define('Login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return login;
};

module.exports = Login;