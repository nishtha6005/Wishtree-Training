var mongoose = require('mongoose')

var CartSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true 
    },
    product :{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Product',
        required:true 
    },
    quantity:{ 
        type:Number, 
        default:1 ,
        required:true
    }
})

module.exports = mongoose.model('Cart',CartSchema)