var fs = require('fs')

// Asynchronous Reading
console.log("Start Reading")
fs.readFile('./File1.txt','utf8',function(err,data)
{
    if (err)
        console.log(err.message);
    else
        console.log(data);
})
console.log("End Reading")

// Synchronous Reading
console.log("Start Reading")
data = fs.readFileSync('./File1.txt','utf8')
console.log("Data -----",data);
console.log("End Reading")