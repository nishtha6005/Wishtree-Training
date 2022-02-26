let Orders = require('../model/orders')

exports.getOrders=(req,res)=>{
    Orders.find()
    .then(result=>{
        res.status(200).json({
            success: true,
            message: `Your order has been placed successfully!`,
            orders:result
          })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.addOrders=(req,res)=>{
    let order  = new Orders ({
        user:req.body.user,
        address:req.body.address,
        mobileNo:req.body.mobileNo,
        totalAmount:req.body.totalAmount,
        products:req.body.products,
        quantity:req.body.quantity
    })
    order.save()
    .then(result=>{
        res.status(200).json({
            success: true,
            message: `Your order has been placed successfully!`,
          })
    })
    .catch(error=>{
        console.log(error)
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

