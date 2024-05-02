const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 8080;

const { getPosts } = require("./routes/post");

// middleware
app.use(morgan("dev"));

// custom middleware
const customMiddleWare = () => {
  console.log("custom middleware applied!");
};

app.use(customMiddleWare);

app.get("/", getPosts);

app.listen(port, () =>
  console.log(`Node JS API is listening on port: ${port}`)
);
