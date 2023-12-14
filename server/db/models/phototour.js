'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoTour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PhotoTour.init({
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'PhotoTour',
  });
  return PhotoTour;
};