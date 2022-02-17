var fs = require('fs')
var readStream = fs.createReadStream('WriteStream.js')
var writeStream = fs.createWriteStream('WriteStream.txt')

readStream.pipe(writeStream)

