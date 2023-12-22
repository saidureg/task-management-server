const express = require("express");
const cors = require("cors");
require("dotenv").config();

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Task management server is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
