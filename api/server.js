import express from "express";

const app = express();

import cors from "cors";
import morgan from "morgan";

const PORT = 8000;

//middleware
app.use(express.json());
app.use(cors()); // allow cross origin access from different server frontend app.
app.use(morgan("dev")); // log all the server requests

//DB connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//router
import userRouter from "./src/routers/userRouter.js";
app.use("/users", userRouter);

// request handler
app.use("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

//run node app in the web server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is spinning at http://localhost:${PORT}`);
});
