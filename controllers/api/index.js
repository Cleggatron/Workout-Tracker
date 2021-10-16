const router = require("express").Router()
const { Workout } = require("../../models");

router.get("/workouts", async (req, res) => {
    Workout.find({}).then(data => {
        console.log(data)
        res.status(200).end()
    }).catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router;