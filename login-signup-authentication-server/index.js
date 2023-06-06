const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./Routes/AuthRoute");

const app = express();

// const blogRouter = require("./Routes/blog");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log("err in mongo connection:", error);
  }
};

const prepareAndStartServer = () => {
  app.use("/", bodyParser.json());
  app.use("/", bodyParser.urlencoded({ extended: true }));

  app.use("/v1/api/user/auth", authRouter);

  //   app.use("/", (err, req, res, next) => {
  //     const statusCode = err.statusCode || 500;
  //     const message = err.message || "something went wrong";
  //     res.status(statusCode).json(message);
  //   });
  app.listen(3000, () => {
    console.log("hello world");
    connectDB();
  });
};

prepareAndStartServer();
