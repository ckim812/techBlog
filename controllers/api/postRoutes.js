const router = require("express").Router();
const { Post Comment} = require("../../models");

router.post("/createNewPost", (req, res) => {
  req.body.user_id = req.session.user_id;

  Post.create(req.body).then((data) => {
    res.redirect("/dashboard");
  });
});

router.post("/createNewComment/:id", (req, res) => {
  // req.body.user_id = req.session.user_id;
  let url = window.location.pathname
  let thisPostID = url.substring(url.lastIndexOf('/')+1);
  Comment.create(req.body).then((data) => {
    res.redirect("/");
  });
});

module.exports = router;
