const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
// const userRoutes = require("./api/user-routes");
console.log("inside the root index.js")
router.use("./api", apiRoutes);
router.use("/", homeRoutes);


module.exports = router;