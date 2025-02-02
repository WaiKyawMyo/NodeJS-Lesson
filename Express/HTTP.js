const http = require('http')
const {readFileSync}= require('fs')

//get all files
const homePage= readFileSync('./navbar-app/index.html')
const style= readFileSync('./navbar-app/styles.css')
const logo= readFileSync('./navbar-app/logo.svg')
const browser= readFileSync('./navbar-app/browser-app.js')
const server = http.cereateServer((req,res)=>{
    const url= req.url
    //Home page
    if(url ==="/"){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    //Style
    else if(url ==="/"){
        res.writeHead(200,{'content-type': 'text/css'})
        res.write(style)
        res.end()
    }
    //About page
    else if(url==='/about'){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }//404
    else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
    
})

server.listen(5000)
