const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    // created_at: {
    //   type: "TIMESTAMP",
    //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    //   allowNull: false,
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    // timestamps: false,
    // freezeTableName: false,
    // underscored: true,
    // modelName: "posts",
  }
);

module.exports = Post;
