const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const TMClient = require('textmagic-rest-client');
const nodemailer = require('nodemailer');
const fs = require('fs')
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


function hello()
{
    console.log(hello);
}
app.get('/', function (req, res) {
    res.render('index');
  })

app.listen(3000, function () {
  console.log('Baggage app listening on port 3000!')
})

app.post('/', function (req, res) {
    var data = parseCSV("data.csv");
    var success = signInSuccessful(req.body.username,req.body.password,data);
    console.log(success);
    if(success);
    {
        updateUserInfo(req.body.username,req.body.email,req.body.phone,data);
    }
    console.log(req.body.username);
    console.log(req.body.password);
    res.render('confirmation', {user: req.body.username,fs: fs, nodemailer: nodemailer, TMClient: TMClient, data: data,success: success});
  })

  function parseCSV(fileName)
  {
      var dataString = fs.readFileSync(fileName, 'utf8');
      var lines = dataString
      .split(/\n/)                     // Convert to one string per line
      .map(function(lineStr) {
          return lineStr.split(",");   // Convert each line to array (,)
      })
      return JSON.stringify(lines, null, 2);
  }

  function signInSuccessful(username,password,data)
  {
    for(index = 0; index < data.length; index++)
    {
        if(data[index][0] === username && data[index][1] === password)
        {
            return true;
        }
                   
    }
  }

  function updateUserInfo(username,email,phone,data)
  {
    for(index = 0; index < data.length; index++)
    {
        if(data[index][0] === username)
        {
            data[index][2] = email;
            data[index][3] = phone;
        }
                   
    }
    update(parseCSV("data.csv"),data);

  }

function update(oldData,data)
{
    //var oldData = parseCSV(fileName).join(", ");
    oldData = Array.prototype.join.call(oldData, ", ");
    //var newData = data.join(", ");
    var newData = Array.prototype.join.call(data, ", ");

    if(newData !== oldData)
    {
        var result = data.replace(oldData,newData);
        fs.writeFile(fileName, result, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
        
            console.log("file saved!");
        });
    }
    
}

