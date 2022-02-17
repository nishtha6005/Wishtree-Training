var fs = require('fs')

// Asynchronous Writing
// var data = 'Writing into File2'
// console.log('Writing Start')
// fs.writeFile('./File2.txt',data,function(err,data)
// {
//     if (err)
//         console.log(err)
//     else
//         console.log('Complete')
// })

// console.log('Writing End')

// Synchronous Reading
var data='Synchronous Writing'
console.log('Writing Start')
fs.writeFileSync('./File3.txt',data)
console.log('Complete')
console.log('Writing End')
