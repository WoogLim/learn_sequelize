'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommonItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  CommonItems.init({
    itemId: {
      allowNull: false, // NOT NULL
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // UUID를 기본 값으로 설정합니다.
    },
    itemUseTable: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    itemUseColum: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    itemCode: {
      allowNull: false, // NOT NULL
      unique: true,
      type: DataTypes.STRING,
    },
    itemName: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    itemTest: {
      allowNull: true, // NOT NULL
      type: DataTypes.STRING,
      defaultValue: 'test'
    },
    createdAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'CommonItems',
  });
  return CommonItems;
};