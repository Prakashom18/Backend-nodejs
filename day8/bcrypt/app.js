const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{

    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash('hello',salt,function(err,hash){
                console.log(hash);
        });
    })

})

const myPlaintextPassword = 'hello';
const hash = `$2b$10$a8EJgZDEh3Ar/WzdaqyCxObLYtP5NXcIrSTE4rtBGj3cgrYRjxggy`

app.get('/check',(req,res)=>{
    bcrypt.compare(myPlaintextPassword,hash,function(err,result){
        console.log(`${result}`);
    })
})

app.listen(3000,(err)=>{
    console.log(`app running on port 3000`)
})