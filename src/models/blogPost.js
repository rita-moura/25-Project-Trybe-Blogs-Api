module.exports = (Sequelize, DataTypes) => {
  const PostsTable = Sequelize.define('Posts', {
    display_Name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'blog_posts',
    underscored: true,
  });

  PostsTable.associate = (models) => {
    UserTable.hasMany(models.User, {
      foreignKey: 'user_id',
      as: 'posts_user'
    });
  };

  return PostsTable;
};
