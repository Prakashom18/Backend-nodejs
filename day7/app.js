const express = require('express');
const path = require('path');

const userModel = require('./userModel');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index"); // NOT index.ejs
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name : "harshita",
    email: "harshita@gmail.com",
    username:"harshita"
  })
  res.send(createdUser);
});

app.get('/update',async function(req,res){
   let updateduser = await userModel.findOneAndUpdate({username : "harsh"}, {username:"bikash"}, {new:true})
    res.send(updateduser)
})

app.get('/read', async function(req,res){
  let readuser = await userModel.find();
  res.send(readuser);
})

app.get('/delete',async function(req,res){
  let deleteUser = await userModel.findOneAndDelete({username :"bikash"})
    res.send(`Hey ${deleteUser} your acount is deleted`);
  
})

app.get('/readone',async function(req,res){
  let oneuser = await userModel.findOne({username:"harsh"})
  res.send(oneuser);
})

app.listen(3000,function(err){
    console.log("running on port 3000")
});
