const express  = require('express')
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.set('view egine' , 'ejs');

app.get('/',(req,res)=>{
    // res.send('authentication')
    res.cookie('name','hari');
    res.send('done');

})

app.get('/read',(req,res)=>{
    res.send('check the cookie');
    console.log(req.cookies)
})



app.listen(3000,(err)=>{
    console.log('running on port 3000');
})