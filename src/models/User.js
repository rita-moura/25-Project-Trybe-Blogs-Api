module.exports = (Sequelize, DataTypes) => {
  const UserTable = Sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.Posts, {
      foreignKey: 'user_id',
      as: 'posts_user'
    });
  };

  return UserTable;
};
