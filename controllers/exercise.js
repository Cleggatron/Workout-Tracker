const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile("exercise.html")
})

module.exports = router;