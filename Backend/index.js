const express = require("express");
const app = express();
const http = require('http');
const bodyParser = require("body-parser");
const cors = require("cors");
const {Server} = require('socket.io');

require("dotenv").config();
require("./models/db.js");
const PORT = process.env.PORT || 3000;
const options = {
  origin: `${process.env.CLIENT_URL}`,
  methods: "GET,POST,PUT,PATCH,DELETE",
  credentials: true,
};

const server= http.createServer(app);
const io= new Server(server,{
  cors:{
    origin:`${process.env.CLIENT_URL}`,
    methods: "GET,POST,PUT,PATCH,DELETE",
  }
});

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

// socket-io connection
io.on('connection',(socket)=>{
  console.log('socket connected',socket.id);

  socket.on("join-doc",({id,userId})=>{
    socket.join(id);
    console.log(`User having email:${userId} joined the doc ${id}`);
    
  });

  socket.on("send-changes",({id,userId,delta})=>{
    socket.to(id).emit("receive-changes",{senderId:userId,delta});
  });

  socket.on("disconnect",()=>{
    console.log("user disconnected:",socket.id);
    
  });
  
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
