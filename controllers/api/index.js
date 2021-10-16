const router = require("express").Router()
const db = require("../../models");

router.get("/workouts", async (req, res) => {
    db.Workout.find({}).then(dbWorkouts => {
        console.log(dbWorkouts)
        res.status(200).json(dbWorkouts)
    }).catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router;