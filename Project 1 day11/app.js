const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt')
const userModel = require('./models/userModel')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('Homepage');
})

app.get('/login',(req,res)=>{
    res.send('Login Page')
})

app.listen(3000,(err)=>{
    console.log('running on port 3000');
})