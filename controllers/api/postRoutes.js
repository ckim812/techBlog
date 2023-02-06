const router = require("express").Router();
const { Post } = require("../../models");

router.post("/createNewPost", (req, res) => {
  req.body.user_id = req.session.user_id;

  Post.create(req.body).then((data) => {
    res.redirect("/dashboard");
  });
});

module.exports = router;
