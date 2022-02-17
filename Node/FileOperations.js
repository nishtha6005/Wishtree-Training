var fs = require('fs')

var content = fs.readFileSync('./File1.txt','utf8',(err,data)=>{
    if(err)
        console.log(err.message)
    else
    {
        console.log('Read Complete')
        return data
    }
})
console.log(content)

fs.writeFile('./File4.txt',content,err=>{
    if (err)
        console.log(err.message)
    else
    {
        console.log('Write Complete')
    }
})