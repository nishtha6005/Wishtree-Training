var mongoose = require('mongoose')

var MRSchema = new mongoose.Schema({
    mrDate:{
        type:Date,
        required:true,
        default:Date.now
        },
    mrNo:{
        type:Number,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('MR',MRSchema)