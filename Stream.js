const {createReadStream}= require('fs')
const stream = createReadStream('./')

stream.on("data",(result)=>{
    console.log(result)
})