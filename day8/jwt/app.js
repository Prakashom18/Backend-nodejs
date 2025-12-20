const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cookieParser());

const secretToken = 'secret';

app.get('/', (req, res) => {
    const token = jwt.sign(
        { email: 'username@gmail.com' },
        secretToken
    );

    res.cookie("token", token);
    res.send("Cookie set");
});

app.get('/read', (req, res) => {
    console.log(req.cookies.token);
    res.send(req.cookies);
});

app.listen(3000, () => {
    console.log("running on port 3000");
});
