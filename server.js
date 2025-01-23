
const fs = require('fs')
const http= require('http')
// // //Blocking, synchronous way
// const textIn =fs.readFileSync('./txt/input.txt','utf-8')
// const Textout  = `this is what we know about the avocod ${textIn}.`
// fs.writeFileSync('./txt/output.text',Textout)
// console.log('File written')

//Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data)=>{
//         console.log(data)
//     })
// })
// console.log("will read file!")

//SERVER
const server = http.createServer((req,res)=>{
    console.log(req)
    res.end("HEllo Form the server!")
}) 

server.listen(8000,'127.0.0.1',()=>{
    console.log("LIsting to requirests on port 8000")
})