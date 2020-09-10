const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB connection established successfully");
});

const addRouter = require("./routes/add");
const listRouter = require("./routes/list");
app.use("/add", addRouter);
app.use("/list", listRouter);

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
