const express = require('express');
const app = express();
const crypto = require('crypto');
const path = require('path')

  
const upload = multer({ storage: storage })

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12,(err,bytes)=>{
        const fn = bytes.toString("hex")+ path.extname("abcd.jpeg");
        cb(null,fn)
    })
   
  }
})


app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.send('dashboard')
})

app.get('/test',(req,res)=>{
    res.render('test')
})

app.post('/upload',(req,res)=>{
   console.log(req.body)

})

app.listen(3000,(err)=>{
    console.log("App running on port 300")
})