const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_DB;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connection to database successfull");
});

const memoriesRouter = require("./routes/memories");
app.use("/memories", memoriesRouter)

const userRouter = require("./routes/users");
app.use("/user", userRouter)






app.listen(port, ( )=> {
    console.log(`Server started on port ${port}`);
});
