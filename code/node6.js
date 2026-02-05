const http=require('http')
const app=http.createServer((req,res)=>{

 
    res.writeHead(200,{'content-type':'text/html'})

    res.write("<input type='text' placholder='enter your name' />")
    res.write("<h1 style='color:red;background-color:aqua;padding:30px'>Hello </h1>")


    res.end()
})

app.listen(3000,'127.0.0.1',()=>{
    console.log('server is up......')
})