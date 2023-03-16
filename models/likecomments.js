'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LikeComments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Comments, {
        targetKey: 'commentId',
        foreignKey: 'commentId'
      })

      this.belongsTo(models.Users, {
        targetKey: 'userId',
        foreignKey: 'userId'
      })
    }
  }
  LikeComments.init({
    likeId: {
      allowNull: false, // NOT NULL
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // UUID를 기본 값으로 설정합니다.
    },
    commentId: {
      allowNull: false, // NOT NULL
      type: DataTypes.UUID,
    },
    userId: {
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
    modelName: 'LikeComments',
    uniqueKeys: {
      likePostKey: {
        fields: ['commentId', 'userId'],
      }
    }
  });
  return LikeComments;
};