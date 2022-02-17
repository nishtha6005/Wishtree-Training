var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

// INSERT ONE
    mongoClient.connect(url,(err,db)=>{
        if(err)
            throw err
        var dbase = db.db('StudentDB')
        var student = {"id":1,"name":"Aaryan","age":19,"marks":70}
        dbase.collection('student').insertOne(student,(err,res)=>{
            if(err)
                throw err
            console.log('Record inserted')
            db.close();
        })
    })

// INSERT MANY
    mongoClient.connect(url,(err,db)=>{
        if (err)
        throw err
        var dbase=db.db('StudentDB')
        var student=[
            {
                "id":2,
                "name":"Shivansh",
                "age":21,
                "marks":79
            },
            {
                "id":3,
                "name":"Shruti",
                "age":19,
                "marks":89
            },
            {
                "id":4,
                "name":"Priyal",
                "age":21,
                "marks":70
            },
            {
                "id":5,
                "name":"Molik",
                "age":20,
                "marks":85
            }
        ]
        dbase.collection('student').insertMany(student,(err,res)=>{
            if(err)
            console.log(err.message)
            else
            console.log('Records Inserted')
            db.close();
        })
    })