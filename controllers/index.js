const router = require("express").Router()
const exerciseRoutes = require("./exercise");
const statsRoutes = require("./stats");
const apiRoutes = require("./api");

router.use("/exercise", exerciseRoutes)
router.use("/stats", statsRoutes)
router.use("/api", apiRoutes);

module.exports = router