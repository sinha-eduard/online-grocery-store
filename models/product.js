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
    catagory: {
        type: String,
        lowecase : true,
        enum: ['fruit', 'vegetable', 'dairy', 'baked']
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;