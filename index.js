const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");

const Product = require("./models/product");
const Cart = require("./models/cartItems");

mongoose
  .connect("mongodb://localhost:27017/groceryStore")
  .then(() => {
    console.log("Mongoose Connection Open");
  })
  .catch((e) => {
    console.log("Mongoose Connection Error");
    console.log(e);
  });

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", "./public/views");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(async (req, res, next) => {
  let count = await Cart.countDocuments({});
  req.cartCount = count;
  next();
});

app.get("/home", async (req, res) => {
  const { category } = req.query;
  if (category) {
    if (
      category == "fruit" ||
      category == "vegetable" ||
      category == "baked" ||
      category == "dairy" ||
      category == "meat" ||
      category == "seafood"
    ) {
      const products = await Product.find({ category: category });
      res.render("grocerystore/category", { products, category });
    } else {
      res.redirect("/404");
    }
  } else {
    const products = await Product.find({});
    res.render("grocerystore/home", { products });
  }
});

app.get("/", async (req, res) => {
  res.redirect("/home");
});

app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    if (
      category == "fruit" ||
      category == "vegetable" ||
      category == "baked" ||
      category == "dairy" ||
      category == "meat" ||
      category == "seafood"
    ) {
      const products = await Product.find({ category: category });
      res.render("grocerystore/category", { products, category });
    } else {
      res.redirect("/404");
    }
  } else {
    res.redirect("home");
  }
});

app.get("/productsearch", async (req, res) => {
  const { name } = req.query;
  let empty = true;
  try {
    const products = await Product.find({
      name: { $regex: name, $options: "i" },
    });
    if (products.length != 0) {
      empty = false;
    }
    res.render("grocerystore/search", { products, empty, name });
  } catch (e) {
    res.redirect("/404");
  }
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    const category = await Product.find({ category: product.category });
    res.render("grocerystore/show", { product, category });
  } catch (e) {
    res.redirect("/404");
  }
});

app.post("/cart", async (req, res) => {
  try {
    const product = req.body.product
    const quantity = req.body.quantity
    const pro = await Product.findById(product);
    const price = pro.price
    const name = pro.name
    const cat = pro.category
    const img = pro.img

    const item = new Cart({product:product, quantity:quantity, price:price, name:name, category:cat, img:img});
    await item.save();
    res.end()
  } catch (e) {
    res.redirect("/404");
  }
});

app.get("/cart", (req, res) => {
  res.render("grocerystore/cart", { count: req.cartCount });
});

app.get("/cartItems", async (req, res) => {
  const cart = await Cart.find({});
  res.json(cart);
});

app.get("/cartItems/:id", async (req, res) => {
  const item = await Cart.findById(req.params.id);
  res.json(item);
});

app.put("/cartItems", async (req, res) => {
    const item = await Cart.findById(req.body.cartId)
    let q = 1+ item.quantity
    await Cart.findByIdAndUpdate(req.body.cartId, {quantity:q});
    res.sendStatus(200).end()
});

app.put("/cartItemsRemove", async (req, res) => {
  const item = await Cart.findById(req.body.cartId)
  let q = item.quantity -1
  await Cart.findByIdAndUpdate(req.body.cartId, {quantity:q});
  res.sendStatus(200).end()
});

app.delete("/cartItems/:id", async (req, res) => {
  const {id} = req.params
  await Cart.findByIdAndDelete(id)
  // res.redirect(`/cart`)

  console.log("called")
  res.sendStatus(200).end
});

app.get("/productData", async (req, res) => {
    const pro = await Product.find({});
    res.json(pro);
  });

  app.get("/cartFin", async (req, res) => {
    await Cart.deleteMany({}) 
    res.sendStatus(200).end
  });

app.get("/404", (req, res) => {
  res.status(404).render("grocerystore/404"); 
});

app.get("/*", (req, res) => {
  res.redirect("/404");
});

app.listen(3000, async () => {
 //await Cart.deleteMany({})
  console.log("App is listening PORT3000");
});
