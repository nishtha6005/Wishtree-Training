var mongoose = require('mongoose')

var schema = mongoose.Schema;

var studentSchema = new schema({
    id:{type:Number},
    name:{type:String},
    age:{type:Number},
    marks:{type:Number}
})

module.exports= mongoose.model('student',studentSchema)