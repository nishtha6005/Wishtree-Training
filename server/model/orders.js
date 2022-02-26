var mongoose = require('mongoose')

var OrdersSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
    },
    products:{
        type:Array,
        required:true
    },
    quantity:{
        type:Array,
        required:true
    },
    orderDate :{
        type:Date,
        require:true,
        default:Date.now
    }
})

module.exports = mongoose.model('Orders',OrdersSchema)



// products:[{
    //     productId:{
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'Product'
    //     },
    //     quantity:{
    //         type:Number
    //     }
    // }],