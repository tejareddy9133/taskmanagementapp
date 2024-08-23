const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/usermodel/user.model");
const UserRouter = express.Router();

UserRouter.post("/register", async (req, res) => {
  const user = req.body;
  try {
    const password = await bcrypt.hash(user.password, 5);
    const result = await UserModel({ ...user, password });
    await result.save();
    res.status(200).json({ msg: "User registered  successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error registering user" });
    console.log(error.message);
  }
});

module.exports = UserRouter;
