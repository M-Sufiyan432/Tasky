import express from 'express'
import isAuth from "../middleware/isAuth.js";
import {authorize} from "../middleware/authorize.js"

const adminRouter = express.Router();

adminRouter.get("./dashboard",isAuth,authorize("admin"))



export default adminRouter