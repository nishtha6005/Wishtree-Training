var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    fullname :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'Active',
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:true
    }
    // cart:[{
    //     product:{ type:mongoose.Schema.Types.ObjectId, ref:'Product'},
    //     quantity:{ type:Number, default:1 }
    // }]
})

module.exports = mongoose.model('User',UserSchema)

