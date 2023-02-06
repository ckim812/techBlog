const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  }).then((data) => {
    const posts = data.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  });
});

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((data) => data.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/dashboard", (req, res) => {
  Post.findAll({
    include: [User],
  }).then((data) => {
    const posts = data.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts, logged_in: req.session.logged_in });
  });
});

router.get("/createnewpost", (req, res) => {
  res.render("createNewPost");
});

module.exports = router;
