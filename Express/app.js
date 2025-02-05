const express= require('express')
const app = express()


app.get('/',(req,res)=>{
    res.status(200).send("Home")
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})
