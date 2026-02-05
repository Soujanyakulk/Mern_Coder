const htttp=require('http')
const url=require('url')

const app=http.createServer((req,res)=>{
    res.write("<h1>Node Js server up....</h1>")
    const url_link=""
    const result=url.parse(url_link,true)
    console.log(result)
    res.end("response end")
})
const PORT=300
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server running on http://${HOST}:${PORT}`)
})