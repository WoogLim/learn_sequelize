'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Teams, {
        targetKey:'teamId', // Teams 모델의 teamId 컬럼을
        foreignKey: 'teamId' // 현재 모델 teamId가 외래키로 가지겠다.
      })

      // Users UserIfnos 1:1
      this.hasOne(models.UserInfos, {
        sourceKey: 'userId', // 현재 모델의 userId 컬럼을
        foreignKey: 'userId' // UserInfos 모델에 userId컬럼으로 연결합니다.
      })

      // 한 유저는 여러 게시글을 가질 수 있다.
      this.hasMany(models.Posts, {
        sourceKey: 'userId',
        foreignKey: 'userId'
      })

      // 한 유저는 댓글을 여러개 작성할 수 있다.
      this.hasMany(models.Comments, {
        sourceKey: 'userId',
        foreignKey: 'userId'
      })

      // 한 유저는 여러개의 게시글을 좋아요
      this.hasMany(models.LikePosts, {
        sourceKey: 'userId',
        foreignKey: 'userId'
      })

      // 한 유저는 여러개의 댓글을 좋아요
      this.hasMany(models.LikeComments, {
        sourceKey: 'userId',
        foreignKey: 'userId'
      })
    }
  }
  Users.init({
    userId: {
      allowNull: false, // NOT NULL
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.STRING,
    },
    teamId: {
      allowNull: true, // NOT NULL
      type: DataTypes.UUID,
    },
    name: {
      allowNull: true, // NOT NULL
      type: DataTypes.STRING,
      defaultValue: 'Guest',
    },
    password: {
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
    modelName: 'Users',
  });
  return Users;
};