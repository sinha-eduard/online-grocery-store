const mongoose = require("mongoose")
const Product = require("./models/product")

mongoose.connect('mongodb://localhost:27017/groceryStore')
    .then(() => {
        console.log("Mongoose Connection Open")
    })
    .catch(e =>{
        console.log("Mongoose Connection Error")
        console.log(e)
    });

// const p = new Product({
//     name: 'Apple',
//     price: 2.00,
//     catagory: 'fruit'
// })

// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e =>{
//         console.log(e)
//     })

// Product.insertMany([
//     {
//         name:"Lettuce",
//         price:3.00,
//         catagory:"vegetable"
//     },
//     {
//         name:"Milk",
//         price:2.50,
//         catagory:"dairy"
//     },
//     {
//         name:"Bread",
//         price:2.45,
//         catagory:"baked"
//     }
// ])