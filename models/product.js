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
    },
    des:{
        type:String,
        default: "FRESHNESS GUARANTEED You want the freshest for your family and so do we. We've trained our Associates to pick the best and freshest products to meet your expectations. Satisfaction guaranteed* or your money back! *Terms and conditions apply."
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;