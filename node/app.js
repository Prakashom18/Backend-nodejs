const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("dashboard");
});

app.get("/test", (req, res) => [res.render("test")]);

app.post("/upload", (req, res) => {
  console.log(req.file);
  //   res.send("uploaded");
  // res.render('upload')
});

app.listen(3000, (err) => {
  console.log("running on port 3000");
});
