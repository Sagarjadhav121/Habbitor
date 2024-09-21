import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/Error.js";
import cors from "cors";
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // for json use
dotenv.config(); // for .env variable

//handling error using middleware
app.use(errorHandler);
////Connection to the database/////////
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
/////////////////////////////////////

//////////Routes////////////////
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.listen(3000, () => {
  console.log("backend server started");
});
