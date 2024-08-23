const express = require("express");
const app = express();
app.use(express.json());
const connection = require("./db/db");
const UserRouter = require("./routes/user.routes");

app.use("/users", UserRouter);
app.listen(4000, async () => {
  try {
    await connection;
    console.log("server started");
  } catch (error) {
    console.log("error");
  }
});
