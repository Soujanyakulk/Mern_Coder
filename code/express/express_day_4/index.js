const express=require('express')
const app=express()

app.use(express.static('public/'))
app.set("view engine", "ejs");


//routing
app.get('/',(req,res)=>{
    // res.send("<h1Home Page></h1>")
      res.render('home.ejs')
})

app.get('/about',(req,res)=>{
    // res.send("<h1 About Us Page></h1>")
   const aboutDetails = {
    name: "Soujanya Kulkarni",
    profession: "Web Developer",
    bio: "I love building full-stack applications with Express and EJS."
  };
  res.render("about", { aboutDetails });

})

app.get('/contact',(req,res)=>{
// res.send("<h1>404-Page not found</h1>")
  const contactDetails = {
    email: "soujanya@example.com",
    phone: "+91 1234567890",
    address: "Pune, India"
  };
  res.render("contact", { contactDetails });
})

app.get('/project',(req,res)=>{
// res.send("<h1>404-Page not found</h1>")
   const projects = [
    { name: "E-Commerce App", tech: "React + Node.js" },
    { name: "Blog Platform", tech: "Express + MongoDB" },
    { name: "Portfolio Website", tech: "HTML + CSS + JS" }
  ];
  res.render("project", { projects });

})

app.get('/skills',(req,res)=>{
// res.send("<h1>404-Page not found</h1>")
  const skills = ["JavaScript", "Node.js", "Express", "EJS", "React"];
  res.render("skills", { skills });

})
//fallback routing
app.use((req,res)=>{
// res.send("<h1>404-Page not found</h1>")
  res.render('404.ejs')
})



const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server is running ... on http://${HOST}:${PORT}`)
})