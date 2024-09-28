const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product:{
        type:String
       
    },
    quantity:{
        type:Number

    },
    
})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;