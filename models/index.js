const User = require("./User");
const Post = require("./Post");

Post.belongsTo(User, {
  foreignKey: "postID",
  onDelete: "CASCADE"
});



module.exports = { User, Post };
