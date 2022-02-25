let User = require('../model/user')

exports.allUsers = (req,res)=>{
    User.find()
    .then(result=>{
        res.send(result)
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.userById=(req,res)=>{
    let query={email:req.params.email}
    User.find(query)
    .then(result=>{
        res.send(result)
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.addUser=(req,res)=>{
    let user  = new User ({
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password,
        status:req.body.status,
        isAdmin:req.body.isAdmin
    })
    user.save()
    .then(result=>{
        res.status(200).json({
            success: true,
            message: `User has been added successfully`,
          })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.updateUser=(req,res)=>{
    let query = {email:req.params.email}
    User.findOneAndUpdate(query,req.body)
    .then(result=>{
        User.findOne(query)
        .then(result1=>{
            res.status(200).json({
                success: true
              })
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.deleteUser=(req,res)=>{
    let query = {email:req.params.email}
    User.deleteOne(query)
    .then(result=>{
        res.status(200).json({
            success:true
          });
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}


// exports.addToCart=(req,res)=>{
//     let query={_id:req.params.id}
//     // console.log(req.params.email)
//     User.findOneAndUpdate(query,{$set:{cart:req.body.cart}})
//     .then(result=>{
//         res.send(result)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }

// exports.editCart=(req,res)=>{
//     let query ={_id:req.params.id}
//     let productId = req.body.productId
//     User.findOneAndUpdate(query,{$pull:{cart:{product:productId}}})
//     // User.updateOne(query,{$pull: {cart: {$elemMatch: {product : productId}}}})
//     .then(result=>{
        
//         res.send(result)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }