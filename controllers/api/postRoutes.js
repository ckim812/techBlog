const router = require("express").Router();
const { Post, Comment } = require("../../models");

router.post("/createNewPost", (req, res) => {
  req.body.user_id = req.session.user_id;

  Post.create(req.body).then((data) => {
    res.redirect("/dashboard");
  });
});

router.post("/createNewComment/:id", (req, res) => {
  console.log(req.session);
  req.body.user_name = req.session.user_name;
  req.body.post_id = req.params.id;
  console.log(req.body);

  Comment.create(req.body).then((data) => {
    res.redirect("back");
  });
});

router.get("/updatePost/:id", (req, res) => {
  console.log("update button works");
});

router.get("/deletePost/:id", (req, res) => {
  console.log("delete button works");
});

module.exports = router;
