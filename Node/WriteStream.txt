var fs=require('fs')
var content='Write Stream '

var writeStream = fs.createWriteStream('File5.txt')
writeStream.write(content)

writeStream.end()

writeStream.on('finish',()=>{
    console.log('Write Complete')
})

writeStream.on('error',err=>{
    console.log(err.message)
})