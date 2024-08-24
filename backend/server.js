const express = require("express");
const app = express();
app.use(express.json());
const connection = require("./db/db");
const UserRouter = require("./routes/user.routes");
const TaskRouter = require("./routes/task.routes");

app.use("/users", UserRouter); //userrouter
app.use("/task", TaskRouter);
app.listen(4000, async () => {
  try {
    await connection; //i kept connection here
    console.log("server started");
  } catch (error) {
    console.log("error");
  }
});
//starting the server
