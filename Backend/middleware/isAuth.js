import User from "../Model/userModel.js";
import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded._id).select("-password");

    if (!user) return res.sendStatus(401);

    req.user = user;
    next();
  } catch {
    res.sendStatus(403);
  }
};
export default isAuth
