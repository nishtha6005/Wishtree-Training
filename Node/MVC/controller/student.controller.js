var stud = require('../models/student.model')

exports.home = (req,res)=>{
    stud.find((err,result)=>{
        if (err)
            console.log(err.message)
        else
            res.send(result)
    })
}

exports.single=(req,res)=>{
    // var query = {id:Number(req.params.id)}
    var query = {id:req.params.id}
    stud.find(query,(err,result)=>{
        if (err)
            console.log(err.message)
        else
            res.send(result)
    })
}

exports.create = (req,res)=>{
    var student  = new stud ({
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        marks:req.body.marks
    })
    student.save(err=>{
        if(err) throw err
        else
        res.send('Record Inserted')
    })
}

exports.remove = (req,res)=>{
    stud.deleteOne({id:req.params.id},err=>{
        if (err) throw err
        else
        res.send('Record Deleted')
    })
}