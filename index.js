const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose")

const Product = require("./models/product");
const { get } = require("http");
const e = require("express");


mongoose.connect('mongodb://localhost:27017/groceryStore')
    .then(() => {
        console.log("Mongoose Connection Open")
    })
    .catch(e =>{
        console.log("Mongoose Connection Error")
        console.log(e)
    });


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/home", async (req, res) =>{
    const products = await Product.find({})
    res.render('products/home', {products})
})

app.get("/", async (req, res) =>{
    res.redirect("/home")
})

app.get("/products", async (req, res) =>{
    const {category} = req.query;
    if(category){
        if(category == "fruit" || category == "vegetable" ||category == "baked" || category == "dairy"){
            const products = await Product.find({category : category})
            res.render("products/category", { products, category })
        } else {
            res.redirect("/404")
        }
    } else{
        res.redirect("/home")
    }
})

app.get("/products/:id", async (req, res) => {
    const {id} = req.params;
    try{
        const product = await Product.findById(id)
        res.render("products/product", { product })
    }catch(e){
        res.redirect("/404")
    }
})

app.get("/404", (req, res) => {
    res.send("404")
})

app.get("/*", (req, res) => {
    res.redirect("/404")
})

app.listen(3000, () =>{
    console.log("App is listening PORT3000")
})