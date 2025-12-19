const express = require('express');
const path = require('path');

const userModel = require('./userModel');

const app = express();

// app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index"); // NOT index.ejs
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name : "harsh",
    email: "harsh@gmail.com",
    username:"harsh"
  })
  res.send(createdUser);
});

app.get('/update',async function(req,res){
   let updateduser = await userModel.findOneAndUpdate({username : "harsh"}, {username:"bikash"}, {new:true})
    res.send(updateduser)
})


app.listen(3000,function(err){
    console.log("running on port 3000")
});
