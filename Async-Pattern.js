const {readFile,writeFile}= require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try{
        const first = await readFile('./text-file.txt','utf8')
        const second = await readFile('./','utf8')
        await writeFile(
            './text-file.txt',
            `This IS Awesone : ${first} ${second}`,
            {flag:"a"}
        )
        console.log(first,second)
    }catch(error){
        console.log(error)
    }
}


// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else {
//                 resolve(data)
//             }
//         })
//     })
// }   
// getText('./text-file.txt').then(result=>console.log(result)).catch((err)=>console.log(err))
//Reduce


start()