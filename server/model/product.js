var mongoose = require('mongoose')
var schema = mongoose.Schema

var ProductSchema = new schema({
    productName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        minlength:0,
        required:true
    },
    status:{
        type:Boolean,
        default:false,
        required:true
    }
})

module.exports=mongoose.model('Product',ProductSchema)