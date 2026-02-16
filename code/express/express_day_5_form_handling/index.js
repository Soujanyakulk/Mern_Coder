const express=require('express')
const app=express()


// middleware

// static file serve
app.use(express.static('public/'))

// url - to handles url
var url=require('url')

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})


app.get('/saveform',(req,res)=>{
    var urldata=url.parse(req.url,true)
    // res.send(urldata.query)
    // res.send("Form Is Successfully Submitted...")
    
    // database- later

    console.log(urldata.query)

    //data must be pass in a Object
    const obj={data:urldata.query}

    res.render('dashboard.ejs',obj)

    
})


// Form handling using get method
// url=http- NP
// ://127.0.0.1:= HOST
// 3000- PORT
// /saveform- pathname
// ?

// username=Saurabh
// &useremail=saurabh%40gmail.com
// &userpassword=123456
// &useraddress=Pune






//fallback routing

app.use((req,res)=>{
    res.send("<h1>404 Page Not Found</h1>")
})

const HOST='127.0.0.1'
const PORT=3000

app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})


