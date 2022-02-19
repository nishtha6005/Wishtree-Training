var express = require('express')
var app = express()

var route = require('./Router')

app.use('/',route)

app.use('/about',route)

app.listen(3000,(err)=>{
    if(err) throw err
    console.log('Server is running ')
})