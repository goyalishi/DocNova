const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./models/db.js");
const PORT = process.env.PORT || 3000;
const options = {
  origin: `${process.env.CLIENT_URL}`,
  methods: "GET,POST,PUT,PATCH,DELETE",
  credentials: true,
};

const authRouter = require("./routes/authRoutes.js");
const homeRouter = require("./routes/homeRoutes.js");
const docRouter = require("./routes/documentRoutes");

//Middlewares
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json());
app.use(cors(options));

app.use("/auth", authRouter);
app.use("/", homeRouter);
app.use("/document",docRouter);

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
