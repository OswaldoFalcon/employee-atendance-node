/** @format */

const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//settings
app.set("port", process.env.PORT || 3000);
// const { PORT, mongoUri } = require("./config");
// app.use(cors()); // to allow cross origin requests
// app.use(bodyParser.json()); // to convert the request into JSON

mongoose
  .connect(
    "mongodb+srv://waldo112798:YeNz9Zb1oyLyFpzZ@cluster0.t0mtk9x.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));

// Middleware
app.use(morgan("dev"));
app.use(express.json());


// Static Files
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/tasks", require("./routes/tasks"));

// server listening
app.listen(app.get("port"), () => {
  console.log(`App is listening at http://localhost:${app.get("port")}`);
});
