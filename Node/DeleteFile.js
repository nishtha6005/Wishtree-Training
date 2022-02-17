var fs = require('fs')

// Asynchronous Delete
// console.log('Delete Start')
// fs.unlink('./xyz.txt',err=>{
//     if(err)
//         console.log(err.message)
//     else
//         console.log('Complete')
// })
// console.log('Delete End')


// Synchronous Delete
console.log('Delete Start')
try{
    fs.unlinkSync('./xyz.txt')
    console.log("Complete")
}
catch (err)
{
    console.log(err.message)
}
console.log('Delete End')