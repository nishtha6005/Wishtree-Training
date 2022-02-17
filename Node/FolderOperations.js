var fs = require('fs')

// Create Directory
// fs.mkdir('Events',err=>{
//     if (err)
//         console.log(err.message)
// })


// Check if folder exists or not

    //Synchronous
    // console.log(fs.existsSync('Events'))
    // console.log(fs.existsSync('Event'))

    // //Asynchronous
    // fs.access('Events',err=>{
    //     if(err)
    //         console.log(err.message)
    //     else
    //         console.log('Directory Exists')
    // })
    // console.log('Complete')


// Read contents of directory
const filesArray = fs.readdirSync('Events',err=>{
    if (err)
        console.log(err.message)
})
console.log('Files Array ',filesArray)

// Rename directory
fs.rename('Events','Streams',err=>{
    if (err)
        console.log(err.message)
})