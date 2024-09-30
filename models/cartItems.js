const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product:{
        type:String
       
    },
    quantity:{
        type:Number

    },
    price:{
        type:Number
    },
    name:{
        type:String,
        required: true
    },
    category: {
        type: String,
        lowecase : true,
        enum: ['fruit', 'vegetable', 'dairy', 'baked', 'meat', 'seafood']
    },
    img:{
        type:String
    },
})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;