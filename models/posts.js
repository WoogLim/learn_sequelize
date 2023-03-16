'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, {
        targetKey: 'userId',
        foreignKey: 'userId'
      })

      this.hasMany(models.Comments, {
        sourceKey: 'postId',
        foreignKey: 'postId'
      })

      this.hasMany(models.LikePosts, {
        sourceKey: 'postId',
        foreignKey: 'postId'
      })

      this.hasMany(models.ResourceStorage, {
        sourceKey: 'postId',
        foreignKey: 'postId'
      })

      this.hasMany(models.PostTags, {
        sourceKey: 'postId',
        foreignKey: 'postId'
      })
    }
  }
  Posts.init({
    postId: {
      allowNull: false, // NOT NULL
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // UUID를 기본 값으로 설정합니다.
    },
    userId: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    title: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    introduce: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    thumnail: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
      defaultValue:
        'https://s3.ap-northeast-2.amazonaws.com/blog.spartacodingclub.kr/sparta-supporters.png',
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
    modelName: 'Posts',
  });
  return Posts;
};