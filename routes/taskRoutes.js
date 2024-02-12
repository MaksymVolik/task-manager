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

/**
 * @openapi
 * '/api/task':
 *   post:
 *     tags:
 *     - Task
 *     summary: Create a task
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTaskInput'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateTaskResponse'
 *       400:
 *         description: Bad Request
 */
router.post("/task", createTask);

/**
 * @openapi
 * '/api/task':
 *   get:
 *     tags:
 *     - Task
 *     summary: Get user tasks
 *     security:
 *       - basicAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/CreateTaskResponse'
 *       400:
 *         description: Bad Request
 */
router.get("/task", getTasksByUserId);

router.get("/task/all", checkAdmin, getAllTasks);
router.get("/task/:id", getTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;
