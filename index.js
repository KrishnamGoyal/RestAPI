require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;

const router = require("./router/router");
app.use("/api/users", router);

app.get("", (req, res) => {
  res.send("Hello, i am Krishnam!");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, console.log(`${port} Yes i am connected`));
  } catch (error) {
    console.log(error);
  }
};

start();
