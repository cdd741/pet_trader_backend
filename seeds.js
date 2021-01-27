const mongoose = require("mongoose");
const Product = require("./models/product");

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

const p = new Product({
  name: "Ruby Grapfruit",
  price: 1.99,
  category: "Fruit",
});

p.save()
  .then((p) => console.log(p))
  .catch((e) => console.log(e));
