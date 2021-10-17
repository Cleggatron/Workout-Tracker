const router = require("express").Router()
const { Workout } = require("../../models");

router.get("/workouts", (req, res) => {
    Workout.aggregate(
        [
            {
                $addFields: {
                    totalDuration: {$sum: "$exercises.duration"}
                }
            }
        ]
    ).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(400).json(err)
    })
})

router.post("/workouts", async (req, res) => {
    console.log(req.body);
    Workout.create(req.body).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(400).json(err)
    })
})

router.put("/")

module.exports = router;