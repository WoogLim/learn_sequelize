'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResourceStorage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Posts, {
        targetKey: 'postId',
        foreignKey: 'postId'
      })
    }
  }
  ResourceStorage.init({
    resourseId: {
      allowNull: false, // NOT NULL
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // UUID를 기본 값으로 설정합니다.
    },
    postId: {
      allowNull: false, // NOT NULL
      type: DataTypes.UUID,
    },
    resourceUrl: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
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
    modelName: 'ResourceStorage',
  });
  return ResourceStorage;
};