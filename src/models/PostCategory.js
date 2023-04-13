module.exports = (sequelize, DataTypes) => {
  const PostsCategoriesTable = sequelize.define('PostCategory', 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    }, 
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    })

    PostsCategoriesTable.associate = ({ Category, BlogPost }) => {
      Category.belongsToMany(BlogPost, {
        through: PostsCategoriesTable,
        foreignKey: 'categoryId',
        as: 'blogPosts',
      })

      BlogPost.belongsToMany(Category, {
        through: PostsCategoriesTable,
        foreignKey: 'postId',
        as: 'category',
      })
    }
    return PostsCategoriesTable;
}