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

router.post("/workouts", (req, res) => {
    console.log(req.body);
    Workout.create(req.body).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(400).json(err)
    })
})

router.put("/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate({id: req.params.id}, req.body).then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;