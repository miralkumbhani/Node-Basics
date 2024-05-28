const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.error("DB Connection error: ", error));

const port = process.env.PORT || 8080;

const postRoutes = require("./routes/post");

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", postRoutes);

app.listen(port, () =>
  console.log(`Node JS API is listening on port: ${port}`)
);
