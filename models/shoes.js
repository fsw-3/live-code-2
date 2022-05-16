'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shoes.init({
    name: DataTypes.STRING,
    merk: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    deketedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    modelName: 'Shoes',
  });
  return Shoes;
};