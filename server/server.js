let express = require('express')
require('dotenv').config()
let mongoose = require('mongoose')
let cors = require('cors')
let config = require('../server/config')
let bodyParser = require('body-parser')
let user=require('../server/route/user')
let product = require('../server/route/product')
let auth = require('../server/route/auth')
let cart = require('../server/route/cart')
let mr = require('../server/route/mr')
let orders = require('../server/route/orders')

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/user',user)
app.use('/product',product)
app.use('/auth',auth)
app.use('/cart',cart)
app.use('/mr',mr)
app.use('/orders',orders)

mongoose.connect(process.env.REACT_APP_MONGOURL)
.then(console.log("Mongoose connected"))
.catch(err=>console.log(err));

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(process.env.REACT_APP_SERVERPORT,()=>{
    console.log(`Server is running on port ${process.env.REACT_APP_SERVERPORT}`)
})