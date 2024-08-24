const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    _id: ObjectId,
    title: String,
    description: String,
    dueDate: Date,
    status: String,
  },
  {
    versionKey: false,
  }
);

const TaskModel = mongoose.model("tasks", TaskSchema);

// Export the model
module.exports = TaskModel;
