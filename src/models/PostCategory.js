module.exports = (sequelize, DataTypes) => {
  const PostsCategoriesTable = sequelize.define('PostCategory', 
    {
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
        otherKey: 'postId',
        as: 'blogPosts',
      })

      BlogPost.belongsToMany(Category, {
        through: PostsCategoriesTable,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
      })
    }
    return PostsCategoriesTable;
}