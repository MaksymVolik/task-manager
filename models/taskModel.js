import mongoose, { Schema, model } from "mongoose";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateTaskInput:
 *      type: object
 *      required:
 *        - description
 *      properties:
 *        description:
 *          type: string
 *          default: Buy a book
 *    CreateTaskResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        description:
 *          type: string
 *        completed:
 *          type: boolean
 *        createBy:
 *          type: string
 */
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
