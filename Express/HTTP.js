const http = require('http')

const server = http.cereateServer((req,res)=>{
    const url= req.url
    //Home page
    if(url ==="/"){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h1>Home page</h1>')
        res.end()
    }//About page
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
