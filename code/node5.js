const http=require('http')
const url=require('url')
const app=http.createServer((req,res)=>{


    res.write("Hello Welcome To Node JS")
    const urldata=url.parse(req.url,true)
    console.log(urldata)

    res.end()
})

const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`Server is up on http://${HOST}:${PORT}`)
})