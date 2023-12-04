const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const hbs = require('hbs');
require("./db/conn.js");

const Register = require('./models/register.js');
const { register } = require('module');

const static_path = path.join(__dirname, "../public"); 
const templet_path = path.join(__dirname, "../templets/views");
const partial_path = path.join(__dirname, "../templets/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templet_path);
hbs.registerPartials(partial_path);

app.get("/" , (req,res) =>{
    res.render("index");
})

app.get("/login" , (req,res) =>{
    res.render("login");
})

app.get("/register" , (req,res) =>{
    res.render("register");
})

app.post("/register" , async (req,res) =>{
    try{

        const Password = req.body.password;
        const Cpassword = req.body.cpassword;

        if(Password === Cpassword){

            const registerEmployee = new Register({
                firstname : req.body.firstname,
                email : req.body.email,
                password : req.body.Password,
                cpassword : req.body.Cpassword

            })

           const registered = await registerEmployee.save();
           res.status(201).render("login");

        } else{
            res.send('passwors is not matching');
        }

    } catch(error){
        res.status(400).send(error)
    }
})

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})