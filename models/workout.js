const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      $type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: String,
        name: String,
        duration: Number,
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number,
      },
    ],
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
  { typeKey: "$type" }
);

// workoutSchema.virtual("totalDuration").get(function () {
//   return this.exercises.reduce(function (total, exercise) {
//     return total + exercise.duration;
//   }, 0);
// });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
