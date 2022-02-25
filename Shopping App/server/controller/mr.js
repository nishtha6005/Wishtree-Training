let MR = require('../model/mr')

exports.getMR = (req, res) => {
    MR.find()
        .then(result => {
            res.status(200).json({
                success: true,
                mrList:result
            })
        })
        .catch(error=>{
            res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
              });
        })
}

exports.getMRById = (req, res) => {
    let query = { _id: req.params.id }
    MR.findById(query)
        .then(result => {
            // res.send(result)
            res.status(200).json({
                success: true,
                mr:result
            })
        })
        .catch(error=>{
            res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
              });
        })
}

exports.addMR = (req, res) => {
    let mr = new MR({
        mrDate: req.body.mrDate,
        mrNo: req.body.mrNo,
        supplier: req.body.supplier,
        productId: req.body.productId,
        quantity: req.body.quantity,
        price: req.body.price
    })
    mr.save()
        .then(result => {
            res.status(200).json({
                success: true,
                message:"MR Added",
                mr:result
              })
        })
        .catch(error=>{
            res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
              });
        })

}

exports.deleteMR = (req, res) => {
    let query={_id:req.params.id}
    MR.deleteOne(query)
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

exports.updateMr=(req,res)=>{
    let query = {_id:req.params.id}
    MR.findOneAndUpdate(query,req.body)
    .then(result=>{
        MR.findOne(query)
        .then(result1=>{
            res.status(200).json({
                success: true,
                mr:result1
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

exports.updateQuantity=(req,res)=>{
    
}