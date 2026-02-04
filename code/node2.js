
const http=require('http')


const calci=require('./module')

const app=http.createServer((request,response)=>{
    response.write("Hello Welcome To Node JS Server.....")
    response.write("Hello Welcome To Node JS Server.....")

    response.write("Hello Welcome To Node JS Server....."+ calci.name)

    response.write("Addition Is "+ calci.Calci(10,20,"*"))

    response.end()



})

const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log("Server is successfully running ..........")
})
