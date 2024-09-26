const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowecase : true,
        enum: ['fruit', 'vegetable', 'dairy', 'baked', 'meat', 'seafood']
    },
    img:{
        type:String
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;