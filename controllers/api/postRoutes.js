const router = require("express").Router();
const { Post } = require("../../models");

router.post("/createNewPost", (req, res) => {
  console.log(req.body);
  Post.create(req.body).then((data) => {
    res.render("dashboard");
  });
});
