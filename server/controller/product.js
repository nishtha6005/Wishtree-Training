var Product = require('../model/product')

exports.allProducts = (req,res)=>{
    Product.find()
    .then(result=>{
        res.status(200).json({
            success: true,
            products: result
        })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.search=(req,res)=>{
    let pname = req.query.productName
    console.log(req.query)
    if(pname!=null)
    {
        Product.find({productName:{$regex:pname,$options:/i/}})
        .then(result=>{
                console.log(result)
                res.status(200)
                .send({
                success:true,
                search:result
                })            
        })
        .catch(error=>{
            res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
              });
        })
    }
    
}

exports.productById=(req,res)=>{
    let query = {_id:req.params.id}
    Product.find(query)
    .then(result=>{
        res.status(200).json({
            success: true,
            product: result
        })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.addProduct = (req,res)=>{
    let product = new Product({
        productName:req.body.productName,
        description:req.body.description,
        price:req.body.price,
        status:req.body.status,
    })
    product.save()
    .then(result=>{
        res.status(200).json({
            success: true,
            message: `Product has been added successfully!`,
            product: result
        })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })

}

exports.updateProduct=(req,res)=>{
    let query = {_id:req.params.id}
    Product.findOneAndUpdate(query,req.body)
    .then(result=>{
        Product.findOne(query)
        .then(result1=>{
            res.status(200).json({
                success: true,
                product:result1
              })
        })
        .catch(error=>{
            res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
              });
        })
    })
    .catch(error=>{
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    })
}

exports.deleteProduct =(req,res)=>{
    var query = {_id:req.params.id}
    Product.deleteOne(query)
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