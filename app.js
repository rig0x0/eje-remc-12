const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const port = process.env.PORT || 3000;
const app = express();

//advance-table.html
//signin-one.html
//404.html

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cors());
//Definir rutas: login, categorias, index y NotFound
//GET o POST
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/login',(req,res)=>{
    res.render('signin-one');
})

app.get('/categorias',(req,res)=>{
    res.render('advance-table');
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(port,()=>{
    console.log('El servidor corriendo en el puerto: '+port);
})