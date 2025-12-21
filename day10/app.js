const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('Running homepage');
})



app.listen(3000,(err)=>{
    console.log("running on port 3000");
})
