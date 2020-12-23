var nodemailer = require('nodemailer');
console.log('email')

const sendEmail = async()=>{
var transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
  auth: {
    user: 'hi@twfmade.ca',
    pass: 'sunfire312'
  }
});

var mailOptions = {
  from: 'hi@twfmade.ca',
  to: 'hi@twfmade.ca',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

sendEmail()