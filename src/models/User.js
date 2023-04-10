module.exports = (Sequelize, DataTypes) => {
  const UserTable = Sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.Posts, {
      foreignKey: 'user_id',
      as: 'posts_user'
    });
  };

  return UserTable;
};
