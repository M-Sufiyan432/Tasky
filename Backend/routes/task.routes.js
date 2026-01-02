import express from "express";
import isAuth from "../middleware/isAuth.js";
import { createTask, getAllTask, onCompleteTask, onDeleteTask } from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.post("/addTask", isAuth, createTask);
taskRouter.get("/getAllTask",isAuth,getAllTask);
taskRouter.post("/onDelete/:taskId",isAuth,onDeleteTask);
taskRouter.post("/onComplete/:taskId",isAuth,onCompleteTask)


export default taskRouter;
