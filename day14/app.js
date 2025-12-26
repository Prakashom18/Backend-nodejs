const express = require('express');
const app = express();
const crypto = require('crypto');
const path = require('path');
const multer = require('multer'); // Added

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads');
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      if (err) return cb(err);
      const fn = bytes.toString('hex') + path.extname(file.originalname); // Use original extension
      cb(null, fn);
    });
  }
});

const upload = multer({ storage: storage });

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('dashboard');
});

app.get('/test', (req, res) => {
  res.render('test');
});

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('File uploaded successfully');
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
