const { json } = require('body-parser')
var express = require('express')
var fs = require('fs')

var app = express()

// GET REQUEST
        app.get('/employees',(req,res)=>{
            fs.readFile('emp.json','utf8',(err,data)=>{
                res.end(data)
            })
            
        })

        app.get('/employees/:id',(req,res)=>{
            fs.readFile('emp.json','utf8',(err,data)=>{
                var empList = JSON.parse(data);
                var emp = empList['emp'+req.params.id]
                res.end(JSON.stringify(emp))
            })
            
        })


// POST REQUEST
        var employee = {
            "emp8":{
                "id":8,
                "employeeName":"Molik",
                "salary":75000
            }
        }

        app.post('/addEmployee',(req,res)=>{
            fs.readFile('emp.json','utf8',(err,data)=>{
                data = JSON.parse(data)
                data['emp8']=employee['emp8']
                res.end(JSON.stringify(data))
                fs.writeFile('emp.json',JSON.stringify(data),err=>{
                    if (err)
                        console.log(err.message)
                })
            })
        })

//  DELETE REQUEST
        app.delete('/delete/:id',(req,res)=>{
            fs.readFile('emp.json','utf8',(err,data)=>{
                data= JSON.parse(data)
                delete data['emp'+req.params.id]
                res.end(JSON.stringify(data))
                fs.writeFile('emp.json',JSON.stringify(data),err=>{
                    if (err)
                        console.log(err.message)
                })
            })
        })

        

app.listen(8080,()=>{
    console.log('Server is Running !!! ')
})