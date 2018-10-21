const TMClient = require('textmagic-rest-client');
const nodemailer = require('nodemailer');
const fs = require('fs')


function sendText(number,name, message)
{
    var c = new TMClient('spoorthijakka', 'GUBw5yqH6CZvV0xfdyrkaMvavFomjV');
    c.Messages.send({text: message, phones:number}, function(err, res){
    console.log('Messages.send()', err, res);
});
}

function sendEmail(email,name, message)
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
        text: message
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
                var message = `Hi ${name}! Your bag is now on the baggage carousel`
                sendEmail(passenger[3],passenger[1], message);
            }
            else if(passenger[5] === "text")
            {
                var message = `Hi ${passenger[1]}! your bag is now on the baggage carousel`;
                sendText(passenger[4],passenger[1]);
            }
        }
                   
    }
    return info;
}

function update(data,fileName,barcode,passengerInfo)
{
    var oldData = parseCSV(fileName).join(", ");
    var newData = checkBarcode(barcode,passengerInfo).join(", ");
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

function sendLostMessage(dataFromCSV){
    for (index = 0; index < dataFromCSV.length; i++){
        if dataFromCSV[6] === "no"{
            if dataFromCSV[5].textEmail === "text"{
                var lostMessage = `Hello ${dataFromCSV[1]}$! Unfortunately, your bag may be lost. Please proceed to your airline+"'"+"s" nearest help desk to get more information.`;
                sendText(dataFromCSV[4], dataFromCSV[1], lostMessage);
            }
            else if dataFromCSV[index].textEmail === "email"{
                var lostMessage = `Hello ${dataFromCSV[1]}$! Unfortunately, your bag may be lost. Please proceed to your airline+"'"+"s" nearest help desk to get more information. `;
                sendEmail(dataFromCSV[3], dataFromCSV[1], lostMessage);
            }
        }
    }
}





