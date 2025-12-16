const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("hello world");
    
});

app.get("/profile",function(req,res,next){
    return next(new Error("Something went wrong"));
    // res.send("profile page in nepal");
});

// error handler in expres

app.use((err,req,res, next)=>{
    console.error(err.stack)
    res.status(500).send('Something went wrong');
})

app.listen(3000);