const { query } = require('express');
var express = require('express')
var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";
var app = express()

app.listen(8080,()=>{
    console.log('Server is Running !!! ')
})

// GET ALL REQUEST
    app.get('/student-list',(req,res)=>{
        mongoClient.connect(url,(err,db)=>{
            if(err) throw err
            var database = db.db('StudentDB')
            database.collection('student').find({},{_id:0,marks:0}).toArray((err,result)=>{
                if(err) throw err
                res.send(result);
                db.close();
            })
        })
    })

// GET ONE REQUEST
app.get('/student/:id',(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        if(err) throw err
        var database = db.db('StudentDB')
        var query = {id:parseInt(req.params.id)}
        database.collection('student').find(query,{_id:0,marks:0}).toArray((err,result)=>{
            if(err) throw err
            res.send(result);
            db.close();
        })
    })
})

// POST REQUEST
    app.post('/add-student',(req,res)=>{
        mongoClient.connect(url,(err,db)=>{
            var database = db.db('StudentDB')
            var stud = {
                "id":6,
                "name":"Myra",
                "age":20,
                "marks":87
            }
            database.collection('student').insertOne(stud,(err,result)=>{
                if(err) throw err
                console.log(result)
                res.send('Record Inserted')
                db.close();
            })
        })
    })

// PUT REQUEST
    app.put('/update-age/:id',(req,res)=>{
        mongoClient.connect(url,(err,db)=>{
            var database = db.db('StudentDB')
            var query={id:parseInt(req.params.id)}
            var update = {$set:{age:19}}
            database.collection('student').updateOne(query,update,(err,result)=>{
                if(err) throw err
                res.send('Record Updated')
                console.log(result)
                db.close();
            })
        })
    })

// DELETE REQUEST
    app.delete('/delete-student/:id',(req,res)=>{
        mongoClient.connect(url,(err,db)=>{
            var database=db.db('StudentDB')
            var query = {id:parseInt(req.params.id)}
            database.collection('student').deleteOne(query,(err,result)=>{
                if(err) throw err
                if(result.deletedCount === 0)
                    res.send('No such record found')
                else
                    res.send('Record Deleted')
                console.log(result)
                db.close();
            })
        })
    })