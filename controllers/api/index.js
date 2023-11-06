const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

router.use("./user-routes", userRoutes);
router.use("./posts", postRoutes);
router.use("./comments", commentRoutes);

module.exports = router