const express = require('express');
const app = express();
const path = require('path')
const userModel = require('./models/userModel');
const postModel = require('./models/postModel')

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('Running homepage');
})

app.get('/create',async (req,res)=>{
   let user = await userModel.create({
        username : "Hari ",
        age : 25,
        email : "hari@gmail.com"
    })
    res.send(user)
})


app.listen(3000,(err)=>{
    console.log("running on port 3000");
})
