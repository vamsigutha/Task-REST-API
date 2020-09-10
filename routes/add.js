const router = require("express").Router();
let todoSchema = require("../models/todo.model");
const mongoose = require("mongoose");
router.route("/").post((req, res) => {
  todoSchema.index({ createdAt: 1 }, { expireAfterSeconds: req.body.duration });
  const Todo = mongoose.model("Todo", todoSchema);
  const newTodo = new Todo({
    taskName: req.body.taskName,
    taskDescription: req.body.taskDescription,
    duration: req.body.duration,
  });
  newTodo
    .save()
    .then(() => res.json("Task added !!!"))
    .catch((e) => res.status(400).json("Error" + e));
});

module.exports = router;
