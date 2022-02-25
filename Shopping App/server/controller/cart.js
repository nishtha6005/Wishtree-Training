let Cart = require('../model/cart')

exports.cartData=(req,res)=>{
    let query={user:req.params.id}
    Cart.find(query)
    .then(result=>{
        res.status(200).json({
            success: true,
            cart:result
          })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.addToCart=(req,res)=>{
    Cart.exists({product:req.body.product})
    .then(result=>{
        if (result===null)
        {
            let cart  = new Cart ({
                user:req.params.id,
                product:req.body.product
            })
            cart.save()
            .then(result=>{
                res.status(200).json({
                    success: true,
                    message: `Item added to cart`,
                    cart:result
                  })
            })
            .catch(error=>{
                res.status(400).json({
                    error: 'Your request could not be processed. Please try again.'
                  });
            })
        }
        else{
            res.status(200).json({
                success: true,
                message: `Item already added to cart`,
                cart:result
              })
        }
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.removeCart=(req,res)=>{
    let query = {_id:req.params.id}
    Cart.deleteOne(query)
    .then(result=>{
        res.status(200).json({
            success: true
          })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.emptyCart=(req,res)=>{
    let query={user:req.params.id}
    Cart.deleteMany(query)
    .then(result=>{
        res.status(200).json({
            success: true
          })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.updateQuantity=(req,res)=>{
    let query={_id:req.params.id}
    Cart.findOneAndUpdate(query,{$set:{quantity:req.body.quantity}})
    .then(result=>{
        res.status(200).json({
            success: true,
            cart:result
          })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}
