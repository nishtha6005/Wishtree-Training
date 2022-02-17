var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

// DELETE ONE
    mongoClient.connect(url,(err,db)=>{
        if(err)
            console.log(err.message)
        var database = db.db('StudentDB')
        q={age:20}
        database.collection('student').deleteOne(q,(err,res)=>{
            if(err)
                console.log(err.message)
            else
                console.log('Deleted ')
            console.log(res)
            db.close();
        })
    })

// DELETE MANY
    mongoClient.connect(url,(err,db)=>{
        if(err)
            console.log(err.message)
        var database = db.db('StudentDB')
        q={age:{$gt:20}}
        database.collection('student').deleteMany(q,(err,res)=>{
            if(err)
                console.log(err.message)
            else
                console.log('Deleted ')
            console.log(res)
            db.close();
        })
    })