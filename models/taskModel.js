import mongoose, { Schema, model } from "mongoose";

const taskSchema = new Schema({
    description: {
        type: String,
        require: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Task = model("Task", taskSchema);

export default Task;
