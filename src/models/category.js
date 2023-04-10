module.exports = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'categories'
  })

  return CategoryTable;
}