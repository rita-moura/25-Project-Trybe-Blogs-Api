module.exports = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.DATE,
    published: DataTypes.BOOLEAN,
    updated: DataTypes.INTEGER,
  }, {
    tableName: 'blog_posts',
    underscored: true,
    timestamps:false
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return BlogPostTable;
};
