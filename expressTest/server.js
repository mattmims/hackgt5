const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index');
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.post('/', function (req, res) {
    res.render('index');
    console.log(req.body.text);
    console.log(req.body.username);
  })

function toggleText() {
    var textform = document.getElementById("textcontainer");
    var emailform = document.getElementById("emailcontainer");
    emailform.style.display = "none";
    if (textform.style.display === "none") {
        textform.style.display = "block";
    }
}

function toggleEmail() {
    var textform = document.getElementById("textcontainer");
    var emailform = document.getElementById("emailcontainer");
    textform.style.display = "none";
    if (emailform.style.display === "none") {
        emailform.style.display = "block";
    }
}