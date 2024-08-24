const express = require("express");

const jwt = require("jsonwebtoken");
const AuthMiddleware = require("../middleware/Auth");

const TaskRouter = express.Router();

TaskRouter.post("/create", AuthMiddleware, (req, res) => {
  console.log("I am from body", req.body);
  res.send("task created sucessfully");
});

module.exports = TaskRouter;
