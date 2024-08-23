const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://reddyvaritejeshkumarreddy:taskmanager@cluster0.yt0dq.mongodb.net/"
);

module.exports = connection;
