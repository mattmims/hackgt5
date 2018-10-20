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



function checkBarcode(barcode,passengerInfo)
{
    //array of dictionaries with rows as indexes column as key value as value
    for(index = 0 ; index < dataFromCSV.length ; index++) {
        var deliveredAttribute = dataFromCSV[index].deliveredAttribute
        var textEmail = dataFromCSV[index].textEmail
        if dataFromCSV[index].barcode == bagBarcode{
            deliveredAttribute = "yes"
        //find index which is the row position i dont know how to fake this at the moment
            if textEmail ==="text"{

            }
                //message function with the phone number
            else if textEmail === "email"{

            }
                //email function with email
        else:
            continue;
        }
            
    }

    
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



