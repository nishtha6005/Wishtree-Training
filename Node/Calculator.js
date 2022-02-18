var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.listen(8000,()=>{
    console.log('Server is running')
})

app.get('/',(req,res)=>{
    res.sendFile("F:/Wishtree-Training/Node/calc.html")
})

app.post('/add',(req,res)=>{
    var n1 = Number(req.body.number1)
    var n2 = Number(req.body.number2)
    var result=n1+n2
    res.send('Addition : '+result)
})

app.post('/subtract',(req,res)=>{
    var n1 = Number(req.body.number1)
    var n2 = Number(req.body.number2)
    var result=n1-n2
    res.send('Subtraction : '+result)
})

app.post('/multiply',(req,res)=>{
    var n1 = Number(req.body.number1)
    var n2 = Number(req.body.number2)
    var result=n1*n2
    res.send('Multiplication : '+result)
})

app.post('/divide',(req,res)=>{
    var n1 = Number(req.body.number1)
    var n2 = Number(req.body.number2)
    var result=n1/n2
    res.send('Division : '+result)
})