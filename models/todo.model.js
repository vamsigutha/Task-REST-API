const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    taskName: { type: String, required: true },
    taskDescription: { type: String, required: true },
    duration: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// todoSchema.pre("save", async function(next){
// const todo = this

// })

// const Todo = mongoose.model("Todo", todoSchema);

module.exports = todoSchema;
