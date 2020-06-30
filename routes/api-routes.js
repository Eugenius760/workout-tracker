const router = require("express").Router();
//const mongoose = require("mongoose");
const db = require("../models/index");

// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/bulk", ({ body }, res) => {
    db.insertMany(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// router.get("/api/workouts", (req, res) => {
//     db.find({})
// })
module.exports = router;
