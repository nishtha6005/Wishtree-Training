let User = require('../model/user')

exports.login=(req,res)=>{
    let query={email:req.body.email}
    User.find(query)
    .then(result=>{
        if(result[0].password == req.body.password)
        {
            if(result[0].isAdmin ===true)
            res.status(200).json({
                success: true,
                message: `Admin`,
                user:result
            })
            else
            res.status(200).json({
                success: true,
                message: `User`,
                user:result
            })
        }
        else {
            res.status(401).send({
                success: false,
                error: `Authentication Unsuccessfull `,
            })
        }
    })
    .catch(err=>{
        res.status(401).send({
            success: false,
            error: `Unauthenticated user`,
        })
    })
}

exports.signUp=async(req,res)=>{
    let query={email:req.body.email}
    let existingUser= await User.findOne(query,)
    
    if (existingUser)
    {
        return res.status(400).json({
            success: false,
            message: `User already exists `,
        })
    }
    else
    {
        let user  = new User ({
            fullname:req.body.fullname,
            email:req.body.email,
            password:req.body.password,
        })
        user.save()
        .then(result=>{
            res.status(200).json({
                success: true,
                message: `User registered successfully`,
            })
        })
        .catch(error=>{
            res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
              });
        })
    }
}

