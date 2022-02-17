var events = require('events')

var emitter = new events.EventEmitter()

emitter.on('test',()=>{
    console.log('Test Event')
    emitter.emit('test2')
})

emitter.on('error',(err)=>{
    console.log(err)
})

emitter.on('test2',()=>{
    console.log('Test2 Event')
})

emitter.emit('test')