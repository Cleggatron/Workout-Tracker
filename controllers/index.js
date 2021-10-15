const router = require("express").Router()
const exerciseRoutes = require("./exercise");
const statsRoutes = require("./stats");

router.use("/exercise", exerciseRoutes)
router.use("/stats", statsRoutes)

module.exports = router