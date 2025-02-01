const {createReadStream}= require('fs')
const stream= createReadStream('./',{
    highWaterMark:90000,
    encoding:'utf8'
})
//Default 64kb
//last buffer -remainder
//highWaterMark -control size
// const steram = createReadStream('./ ' , {highWaterMark:90000})
// const steram = createReadStream('../',{encoding:'utf8'})
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=> console.log(err))