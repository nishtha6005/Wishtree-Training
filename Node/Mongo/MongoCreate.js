var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

mongoClient.connect(url,(err,db)=>{
    if(err)
        throw err
    var dbase = db.db("StudentDB");
    dbase.createCollection('student',(err,res)=>{
        if(err)
            throw err
        console.log('Collection Created');
        db.close();
    })
})