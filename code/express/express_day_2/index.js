const express = require("express");
const app = express();
app.use(express.static("public/"));
const menu = `
<ul>
<li><a href='/'>Home</a><li>
<li><a href='/about'>About</a><li>
<li><a href='/contact'>Contact</a><li>
</ul>`;
app.get("/", (req, res) => {
  res.send(menu + "<h1>Home Page</h1>");
});
// about us
app.get("/about", (req, res) => {
  res.send(
    menu +
      `<h1>About us Page</h1>
        <img src="download.jpg" alt="Laptop Wallpaper">
        `,
  );
});
// contact
app.get("/contact", (req, res) => {
  // JSON Data Render
  const obj = {
    id: 1,
    name: "Pratik",
    email: "pratik@gmail.com",
    address: "Pune",
  };
  res.send(obj);
  // res.send(menu+"<h1>Contact Us</h1>")
});
app.get("/contact/contact1", (req, res) => {
  res.send("<h1>Contact Us 1 Page</h1>");
});
// middleware
// fall back routing
app.use((req, res) => {
  res.send(`
        <h1>404- Page Not Found</h1>
        <a href='/'>Go To Home Page</a>
        
        `);
});
PORT = 3000;
HOST = "127.0.0.1";
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
