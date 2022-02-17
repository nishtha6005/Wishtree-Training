const { filter } = require('minimatch');

var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

// Find all records
    // mongoClient.connect(url,(err,db)=>{
    //     if(err)
    //         throw err
    //     var dbase = db.db('StudentDB')
    //     dbase.collection('student').find().toArray((err,res)=>{
    //         if(err)
    //             throw err
    //         console.log(res)
    //         db.close();
    //     })
    // })

// Find all records where student age =  20
    // mongoClient.connect(url,(err,db)=>{
    //     if (err)
    //         console.log(err.message)
    //     var dbase = db.db('StudentDB')
    //     q = {age:{$eq:20}}
    //     dbase.collection('student').find(q).toArray((err,res)=>{
    //             if(err)
    //                 throw err
    //             console.log(res)
    //             db.close();
    //         }
    //     )
    // })

// Find first record where student age =  20
    mongoClient.connect(url,(err,db)=>{
        if (err)
            console.log(err.message)
        var dbase = db.db('StudentDB')
        q = {age:{$gt:20}}
        dbase.collection('student').findOne(q,(err,res)=>{
                if(err)
                    throw err
                console.log(res)
                db.close();
            }
        )
    })