const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const axios = require("axios");

const mongoose = require("mongoose");
const Products = require("./models/product");
const UserAccount = require("./models/userAccount");

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MONGO CONNECTION OPEN!"))
  .catch((err) => {
    console.log("OH NO, MONGO ERROR!");
    console.log(err);
  });

app.post("/login", (req, res) => {
  console.log(`login request by ${req.query.Username}`);
});

app.post("/signup", (req, res) => {
  console.log(`sign up request by ${req.query.Username}`);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
