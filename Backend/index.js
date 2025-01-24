const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./models/db.js");
const PORT = process.env.PORT || 3000;
const options = {
  origin: `${process.env.SERVER_URL}`,
  methods: "GET,POST,PUT,PATCH,DELETE",
  credentials: true,
};

const authRouter = require("./routes/authRoutes.js");
const homeRouter = require("./routes/homeRoutes.js");

//Middlewares
app.use(bodyParser.json());
app.use(cors(options));

app.use("/auth", authRouter);
app.use("/", homeRouter);

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
