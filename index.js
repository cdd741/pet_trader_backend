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

app.post("/login", async (req, res) => {
  const userdata = req.body.userdata;
  console.log(`login request by ${userdata.username}`);
  const user = await UserAccount.find({ username: userdata.username });
  if (user[0].password == userdata.password) {
    res.status(200);
    res.send(`Welcome! ${userdata.firstname}.`);
  } else {
    res.status(406);
    res.send(`Oops, wrong username or password!`);
  }

  // await UserAccount.find(
  //   { username: userdata.username },
  //   { password: userdata.password },
  //   (err, docs) => {
  //     if (err) {
  //       res.status(406);
  //       res.send(`Oops, wrong username or password!`);
  //     } else {
  //       res.status(200);
  //       res.send(`Welcome! ${userdata.firstname}.`);
  //     }
  //   }
  // );

  // TODO 2: make password into hash string
  // TODO 3: seperate files
});

app.post("/signup", async (req, res) => {
  const userdata = req.body.userdata;
  console.log(`signup reqest by ${userdata.username}`);
  const newUser = new UserAccount(userdata);
  await newUser
    .save()
    .then((p) => {
      console.log(p);
      res.status(200);
      res.send(`success`);
    })
    .catch((err) => {
      console.log(`Username has already registerd`);
      res.status(409);
      res.send(`Username has already registerd`);
    });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
