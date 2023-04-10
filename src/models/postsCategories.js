module.exports = (sequelize, _DataTypes) => {
  const PostsCategoriesTable = sequelize.define(
    'PostsCategories', 
    {}, 
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true
    })

    PostsCategoriesTable.associate = ({ Posts, Category }) => {
      Category.belongsToMany(Posts, {
        as: 'posts',
        through: PostsCategoriesTable,
        foreignKey: 'post_id',
        otherKey: 'category_id'
      })

      Posts.belongsToMany(Category, {
        as: 'category',
        through: PostsCategoriesTable,
        foreignKey: 'category_id',
        otherKey: 'post_id'
      })
    }
    return PostsCategoriesTable;
}