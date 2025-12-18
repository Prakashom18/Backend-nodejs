const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.send('index');
})

app.listen(3000,function(err){
    console.log("running on port 3000")
});
