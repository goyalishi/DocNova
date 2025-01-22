const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./models/db");
const PORT = process.env.PORT || 3000;

const authRouter = require("./routes/authROutes");
const homeRouter = require('./routes/homeRoutes.js');

//Middlewares
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/",homeRouter);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "Frontend and backend are connected!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
