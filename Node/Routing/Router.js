var express = require('express');

var router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello From Express JS')
})

router.get('/about',(req,res)=>{
    res.send('About From Express JS')
})

router.post('/data',(req,res)=>{
    res.send('Data posted')
})

module.exports = router