var fs = require('fs')
var content=''

var readStream = fs.createReadStream('File1.txt')
readStream.on('data',data=>{
    content+=data;
})

readStream.on('end',function()
{
    console.log(content)
})

readStream.on('error',err=>{
    console.log(err.message)
})