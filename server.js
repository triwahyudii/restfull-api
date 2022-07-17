const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/index");
const cors = require("cors");
const app = express();

//database
mongoose.connect("mongodb://localhost:27017/restfull_db");
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected.."));

//middleware
app.use(cors());
app.use(express.json());
app.use("/user", route);

app.listen("8080", () => console.log("On port 8080.."));