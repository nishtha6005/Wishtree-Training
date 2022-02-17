var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

// mongoClient.connect(url,(err,db)=>{
//     var dbase=db.db('StudentDB')
//     var query = {id:2}
//     var data={$set:{age:20}}
//     dbase.collection('student').updateOne(query,data,(err,res)=>{
//         if(err)
//         console.log(err.message)
//         else
//         console.log('Record Updated ')
//         console.log(res)
//         db.close();
//     })
// })

mongoClient.connect(url,(err,db)=>{
    var dbase=db.db('StudentDB')
    var query = {age:{$lte:19}}
    var data={$set:{marks:75}}
    dbase.collection('student').updateMany(query,data,(err,res)=>{
        if(err)
        console.log(err.message)
        else
        console.log('Record Updated ')
        console.log(res)
        db.close();
    })
})