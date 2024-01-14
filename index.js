require("dotenv").config();
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dataRouters = require("./routes/data");
const path = require("path");

//middlewares
server.use(cors());
server.use(express.json());

//routing
server.use(express.static(path.resolve(__dirname, "build")));
server.use("/data", dataRouters.router);
server.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
);



main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("mongoose connected");
}

server.listen(process.env.PORT, () => {
  console.log("server started");
});
