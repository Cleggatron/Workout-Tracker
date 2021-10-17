const router = require("express").Router()
const { Workout } = require("../../models");

router.get("/workouts", (req, res) => {
    Workout.aggregate(
        [
            {
                $addFields: {
                    totalDuration: {$sum: "$exercises.duration"},
                    totalWeight: {$sum: "$exercises.weight"}
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

//the .sort .limit .sort will allow us to select the 7 most recent entries. then resort them to provide left to right data on the graph
router.get("/workouts/range", (req, res) => {
    Workout.aggregate(
        [
            {
                $addFields: {
                    totalDuration: {$sum: "$exercises.duration"}, 
                    totalWeight: {$sum: "$exercises.weight"}
                }
            }
        ]
    )
    .sort({day: -1})
    .limit(7)
    .sort({day: 1})
    .then(data => {
        console.log(data)
        res.status(200).json(data)
    }).catch(err => {
        res.status(400).json(err)
    })
})
module.exports = router;