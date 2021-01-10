
var nodemailer = require('nodemailer');
const sendEmailContact = async(data)=>{
  var transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
    auth: {
      user:  process.env.AUTH,
      pass:  process.env.PASSWORD,
    }
  });
  
  var mailOptions = {
    from: 'hi@twfmade.ca',
    to: 'hi@twfmade.ca',
    subject: 'New Apt Request',
    text: `${data.email} ${data.phone} ${data.message}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      console.log(newApt)
    }
  });
  }

  exports.sendEmailContact = sendEmailContact