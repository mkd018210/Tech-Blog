const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const authorize = require("../utilis/auth");

router.get("/", async (req, res) => {
    try {
        const result = await Post.findAll({
            include: { model: User
            },
        });
        const posts = result.map((post) => post.get({ plain: true }));
        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/post/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                {
                    model: Comment,
                    include: [{ model: User, attributes: ["username"] }],
                },
            ],
        });

        const post = postData.get({ plain: true });
        res.render("post", {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/dashboard", async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            include: [{ model: User, attributes: ["username"] }],

        });
        const post = postData.map((post) => post.get({ plain: true }));
        res.render("dashboard", {
            posts,
            logged_in: req.session.logged_in,

        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
    res.render("login");
});

router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
    res.render("signup");
});

router.get("/newpost", (req, res) => {
    if (req.session.logged_in) {
        res.render("newpost");
        return;
    }
    res.redirect("/login");
});

router.get("/editpost/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                {
                    model: Comment,
                    include: [{ model: User, attributes: ["username"] }],
                },
            ],
        });
 
        const post = postData.get({ plain: true });
        res.render("editpost", {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;