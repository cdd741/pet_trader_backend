const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const UserAccount = require("./models/userAccount");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/petTrader", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MONGO CONNECTION OPEN!"))
  .catch((err) => {
    console.log("OH NO, MONGO ERROR!");
    console.log(err);
  });

app.post("/login", (req, res) => {
  const userdata = req.body.userdata;
  console.log(`login request by ${userdata.username}`);
  // const user = await UserAccount.findOne({
  //   usename: req.query.username,
  // }).exec();
  // let success = false;
  // if (user !== null && user.password === req.query.password) {
  //   success = true;
  // }
  // res.success;

  // TODO: find match in database and return success and firstname to front end
  // TODO 2: make password into hash string
  // TODO 3: seperate files
});

app.post("/signup", async (req, res) => {
  const userdata = req.body.userdata;
  console.log(`signup reqest by ${userdata.username}`);

  const newUser = new UserAccount(userdata);

  await newUser
    .save()
    .then((p) => console.log(p))
    .catch((err) => console.log(err));

  // TODO return a object to front end
  res.json(userdata);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
