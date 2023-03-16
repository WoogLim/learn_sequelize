         'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Users, {
        target: 'teamId', // 현재 모델의 teamId 컬럼을
        foreignKey: 'teamId' // Users 모델의 teamId 컬럼과 연결하겠다.
      })
    }
  }
  Teams.init({
    teamId: {
      allowNull: false, // NOT NULL
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // UUID를 기본 값으로 설정합니다.
    },
    userId: {
      allowNull: false, // NOT NULL
      unique: true,
      type: DataTypes.STRING,
    },
    teamName: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    userRole: {
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
    modelName: 'Teams',
  });
  return Teams;
};