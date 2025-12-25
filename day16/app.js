const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/upload:id',(req,res)=>{

})

app.listen(3000,(err)=>{
    console.log("App running on port 300")
})