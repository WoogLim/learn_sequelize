 'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInfos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        targetKey: 'userId', // Users 모델의 userId 컬럼을
        foreignKey: 'userId'  // 현재 모델에 userId 컬럼에 외래키로 적용하겠다.
      })
    }
  }
  UserInfos.init({
    userInfoId: {
      allowNull: false, // NOT NULL
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // UUID를 기본 값으로 설정합니다.
    },
    userId: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    profileImage: {
      allowNull: true, // NULL
      type: DataTypes.STRING,
      defaultValue:
        'https://user-images.githubusercontent.com/51357635/225285611-2d38b568-1cd6-4e85-9876-907a24baebcc.png',
    },
    nickname: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    age: {
      allowNull: true, // NULL
      type: DataTypes.INTEGER,
    },
    gender: {
      allowNull: true, // NULL
      type: DataTypes.STRING,
      defaultValue: 'NONE01',
    },
    position: {
      allowNull: true, // NULL
      type: DataTypes.STRING,
      defaultValue: 'NONE01',
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
    modelName: 'UserInfos',
  });
  return UserInfos;
};