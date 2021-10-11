const router = require("express").Router();
const exercise = require("./exercise")

router.use("/exercise", exercise)

module.exports = router;