import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import adminRouter from "./routes/admin.routes.js";
import taskRouter from "./routes/task.routes.js";
import isAuth from "./middleware/isAuth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// app.use((req, res, next) => {
//   console.log("Incoming:", req.method, req.url);
//   next();
// });


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser(process.env.JWT_SECRET))

app.use(express.json())

// app.get("/me", isAuth, (req, res) => {
//   res.json({ user: req.user });
// });



app.use("/api/auth",authRouter)
app.use("/api/admin",adminRouter)
app.use("/api/task",taskRouter)


app.get("/", (req, res) => {
  res.send("Backend is working");
});



connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend is working at ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect MongoDB", err);
  });
