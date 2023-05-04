const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const templatePath = path.join(__dirname, "../templates");
const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");
const viewsPath = path.join(__dirname, "../templates/views");

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get('*',(req,res)=>{
    res.render('404');
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})