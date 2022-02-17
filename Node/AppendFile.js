var fs = require('fs')
var data = ' Append into File'

// Asynchronous Append
console.log('Append Start')
fs.appendFile('./File2.txt',data,function(err)
{
    if(err)
        console.log(err.message)
    else
        console.log('Complete')
})
console.log('Append End')

// Synchronous Append
// console.log('Append Start')
// fs.appendFileSync('./File3.txt',data)
// console.log('Complete')
// console.log('Append End')
