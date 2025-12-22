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

app.get('/post/create',async (req,res)=>{
  let post = await  postModel.create({
        postdata : "hello bhai logg",
        user : "6948354d1b69c27840d500a6"
    })
   let user  = await userModel.findOne({_id:"6948354d1b69c27840d500a6"})
   user.posts.push(post._id);
   await user.save();
    res.send({post,user});
})


app.listen(3000,(err)=>{
    console.log("running on port 3000");
})
