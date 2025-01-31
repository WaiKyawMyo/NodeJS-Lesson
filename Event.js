const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log(`data recived`)
})

customEmitter.emit('response')