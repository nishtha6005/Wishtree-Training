var express = require('express')
var mongoose = require('mongoose')
var config = require('./config')
var bodyParser = require('body-parser')
var student = require('./routes/student.routes')

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/student',student)

mongoose.connect(config.mongoURL)
.then(console.log("DB connected"))
.catch(err=>console.log(err));

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(config.serverPort,()=>{
    console.log('Server is running')
})