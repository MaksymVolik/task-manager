import express from "express";
import checkAuth from "../middlewares/checkAuth.js";
import checkAdmin from "../middlewares/checkAdmin.js";
import {
    createTask,
    updateTask,
    deleteTask,
    getTasksByUserId,
    getTask,
    getAllTasks,
} from "../controllers/taskController.js";

const router = express.Router();

router.use(checkAuth);

router.post("/task", createTask);
router.get("/task", getTasksByUserId);
router.get("/task/all", checkAdmin, getAllTasks);
router.get("/task/:id", getTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;
