const TMClient = require('textmagic-rest-client');
const nodemailer = require('nodemailer');
const fs = require('fs')


function sendText(number,name)
{
    var c = new TMClient('spoorthijakka', 'GUBw5yqH6CZvV0xfdyrkaMvavFomjV');
    var message = `Hi ${name}! your bag is now on the baggage carousel`
    c.Messages.send({text: 'hello materoom!!', phones:number}, function(err, res){
    console.log('Messages.send()', err, res);
});
}

function sendEmail(email,name)
{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'noreplyscubed@gmail.com',
          pass: 'windexhackgts^3123'
        }
      });
      
      var mailOptions = {
        from: 'noreplyscubed@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: `Hi ${name}! Your bag is now on the baggage carousel`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

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

function checkBarcode(barcode,info)
{
    for(index = 0; index < info.length; index++)
    {
        if(info[index][0] === barcode)
        {
            passenger = info[index];
            passenger[6] = "yes";
            if(passenger[5] === "email")
            {
                sendEmail(passenger[3],passenger[1]);
            }
            else if(passenger[5] === "text")
            {
                sendText(passenger[4],passenger[1]);
            }
        }
                   
    }
}




